const SitesList = () =>{

    const sites = [
        {
            id:1,
            url:"#",
            text:"DC"
        },
        {
            id:2,
            url:"#",
            text:"MAD Magazine"
        },
        {
            id:3,
            url:"#",
            text:"DC Kids"
        },
        {
            id:4,
            url:"#",
            text:"DC Universe"
        },
        {
            id:5,
            url:"#",
            text:"DC Power Visa"
        }
    ]

    return(
        <ul>
            <h3>SITES</h3>
            {sites.map(site =>
                <li key={"site" + site.id}>
                    <a href={site.url}> {site.text} </a>
                </li>
            )}
        </ul>
    )

}

export default SitesList