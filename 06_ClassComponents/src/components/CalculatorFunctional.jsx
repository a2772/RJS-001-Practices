import { useState } from "react";

const Calculator = ({name}) => {
    const [state,setState] = useState({
        val1: 0,
        val2: 0
    })

    const setNumber = (e,val) => {
        setState(
            val === 1 ? 
            {
                ...state,
                val1: e.target.value
            } : 
            {
                ...state,
                val2: e.target.value
            }
        )
    }

    return(
        <>
            <h2>{name}</h2>
            <form>
                <input 
                    type="number" 
                    name="num_1" 
                    value={state.val1} 
                    onChange={(e)=>setNumber(e,1)}>
                </input>
                <input 
                    type="number" 
                    name="num_2" 
                    value={state.val2}
                    onChange={(e)=>setNumber(e,2)}>
                </input>
            </form>
            <span>Result: {Number(state.val1) + Number(state.val2)}</span>
        </>
    )
}

export default Calculator
