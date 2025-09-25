const ComicsList = () => {

    const comics = [
        {
            id:1,
            url:'#',
            text:"Characters"
        },
        {
            id:2,
            url:'#',
            text:"Comics"
        },
        {
            id:3,
            url:'#',
            text:"Movies"
        },
        {
            id:4,
            url:'#',
            text:"Tv"
        },
        {
            id:5,
            url:'#',
            text:"Games"
        },
        {
            id:6,
            url:'#',
            text:"Videos"
        },
        {
            id:7,
            url:'#',
            text:"News"
        }
    ]

    return (
        <ul>
            <h3>DC COMICS</h3>
            {comics.map(comic =>
                <li key={comic.id}>
                    <a href={comic.url}> {comic.text} </a>
                </li>
            )}
        </ul>
    )
}

export default ComicsList

