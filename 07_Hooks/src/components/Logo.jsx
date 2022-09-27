import logo from '../assets/images/murcielago.svg'
import '../css/styles.css'

function Logo() {
    return (
        <div>
            <img className="img-logo" src={logo} alt="Bat's logo"></img>
        </div>
    )
}

export default Logo
