import '../css/styles.css'

function Cover ({image, altImg, title, subtitle}) {
    return(
        <div>
            <img className="img-banner" src={image} alt={altImg}></img>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default Cover
