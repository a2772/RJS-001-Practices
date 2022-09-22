const Article = ({title, content, img})=>{
    return (
        <>
            <div className="class-example" id="jsx-div-1">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div>
                <img src={img} alt="Article's image" class="img-art" />
            </div>
            <form>
                <label htmlFor="email">E-mail: </label>
                <input onChange={()=>{}} type="email" name="email" id="email" />
            </form>
        </>
    )
}

Article({
    props: {
        title: "Title",
        content: "Content",
        img: "/bin/bash"
    }
})