const NavBar = () =>{

    const navList = [
    { 
        id:1,
        url: '#',
        title: "CHARACTERS"
    },
    { 
        id:2,
        url: '#',
        title: "COMICS"
    },
    { 
        id:3,
        url: '#',
        title: "MOVIES"
    },
    { 
        id:4,
        url: '#',
        title: "TV"
    },
    { 
        id:5,
        url: '#',
        title: "GAMES"
    },
    { 
        id:6,
        url: '#',
        title: "COLLECTIBLES"
    },
    { 
        id:7,
        url: '#',
        title: "VIDEOS"
    },
    { 
        id:8,
        url: '#',
        title: "FANS"
    },
    { 
        id:9,
        url: '#',
        title: "NEWS"
    },
    { 
        id:10,
        url: '#',
        title: "SHOP"
    }
    ];

    return(
        <ul>
        {navList.map(link =>
            <li key={"nav" + link.id}> 
                <a href={link.url}> {link.title}  </a>
            </li>
        )}
        </ul>
    )
}

export default NavBar