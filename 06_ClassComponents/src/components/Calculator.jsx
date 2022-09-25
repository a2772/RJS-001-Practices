import { Component } from "react";

class Calculator extends Component{
    //Firs step
    constructor(props){
        super(props)
        this.state = {
            val1: 0,
            val2: 0
        }
        this.setNumber = this.setNumber.bind(this)
    }

    setNumber(e,val){
        this.setState(
            val === 1 ? 
            {
                ...this.state,
                val1: e.target.value
            } : 
            {
                ...this.state,
                val2: e.target.value
            }
        )
    }

    //Second step
    render(){
        return(
            <>
                <h2>{this.props.name}</h2>
                <form>
                    <input 
                        type="number" 
                        name="num_1" 
                        value={this.state.val1} 
                        onChange={(e)=>this.setNumber(e,1)}>
                    </input>
                    <input 
                        type="number" 
                        name="num_2" 
                        value={this.state.val2}
                        onChange={(e)=>this.setNumber(e,2)}>
                    </input>
                </form>
                <span>Result: {Number(this.state.val1) + Number(this.state.val2)}</span>
            </>
        )
    }

    //Third step
    componentDidMount(){

    }

    //Fourth step
    componentWillUnmount(){

    }
}

export default Calculator
