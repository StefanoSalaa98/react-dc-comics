const Comic = (props) =>{

    const { src, title, series } = props;

    return(
        <div>
            <div className="image">
                <img src={src} alt={title} />
            </div>
            <p>{series.toUpperCase()}</p>
        </div>
    )
}

export default Comic