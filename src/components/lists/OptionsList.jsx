import Option from "./Option"

const OptionsList = () =>{

    const Dc = [
        {
            id:1,
            url:"#",
            text:"Therms Of Use"
        },
        {
            id:2,
            url:"#",
            text:"Privacy policy (New)"
        },
        {
            id:3,
            url:"#",
            text:"Add Choices"
        },
        {
            id:4,
            url:"#",
            text:"Advertising"
        },
        {
            id:5,
            url:"#",
            text:"Jobs"
        },
        {
            id:6,
            url:"#",
            text:"Subscriptions"
        },
        {
            id:7,
            url:"#",
            text:"Talent Workshops"
        },
        {
            id:8,
            url:"#",
            text:"CPSC Certificates"
        },
        {
            id:9,
            url:"#",
            text:"Ratings"
        },
        {
            id:10,
            url:"#",
            text:"Shop Help"
        },
        {
            id:11,
            url:"#",
            text:"Contact Us"
        }
    ]

    return(
        <ul>
            <h3>DC</h3>
            {Dc.map(item =>
                // <li key = {"Dc" + item.id}>
                //     <a href={item.url}> {item.text} </a>
                // </li>
                <Option
                    id = {item.id}
                    url = {item.url}
                    text = {item.text}
                />
            )}
        </ul>
    )
}

export default OptionsList