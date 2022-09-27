import { useRef } from 'react'
import '../css/styles.css'

function Cover ({image, altImg, title, subtitle}) {

    const reference = useRef()

    const deactivateImg = ()=>{
        reference.current.classList.add("deactivated")
    }

    return(
        <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button onClick={deactivateImg}>Deactivate</button>
            <div>
                <img className="img-banner" ref={reference} src={image} alt={altImg}></img>
            </div>
        </div>
    )
}

export default Cover
