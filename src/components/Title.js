


const Title = (props)=>{
    const {title,subtitle} = props
    return(
        <div>
            <h1 className="title">
                {title}
            </h1>
            <br />
            <p className="subtitle">
             {subtitle}
            </p>
        </div>
    )
}

export default Title