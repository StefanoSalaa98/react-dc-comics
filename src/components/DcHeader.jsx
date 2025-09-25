// creo ed esporto componente

import NavBar from "./NavBar"

const DcHeader = () => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <img src="/img/dc-logo.png" alt="logo" />
                </div>
                <nav>
                    <NavBar />
                </nav>
            </div>
        </header>
    )
}

export default DcHeader