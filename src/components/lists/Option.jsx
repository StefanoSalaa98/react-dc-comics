const Option = (props) => {

    const {id, url, text} = props;

    return(
        <li key = {"Dc" + id}>
            <a href={url}> {text} </a>
        </li>
    )

}

export default Option