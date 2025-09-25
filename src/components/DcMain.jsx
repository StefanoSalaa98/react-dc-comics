import DcComics from "./DcComics"
import DcList from "./DcList"

const DcMain = () => {
    
    return(
        <div>
            
            <div className="jumbotron">
            </div>
            
            <div className="jumbo-btn">
                <button>
                   CURRENT SERIES
                </button>
            </div>

            <DcComics />

            <div className="sfondo-nero">
                <div className="content">
                    <strong> --&gt; Content goes here &lt;-- </strong>
                </div>
            </div>
            <div className="sfondo-blu">
              <nav>
                <ul className="options">
                    <li>
                        <div className="image">
                            <img src="/img/buy-comics-digital-comics.png" alt="buy-comics-digital-comics" />
                        </div>
                        DIGITAL COMICS
                    </li>
                    <li>
                        <div className="image">
                            <img src="/img/buy-comics-merchandise.png" alt="buy-comics-merchandise" />
                        </div>
                        DC MERCHANDISE
                    </li>
                    <li>
                        <div className="image">
                            <img src="/img/buy-comics-subscriptions.png" alt="buy-comics-subscriptions" />
                        </div>
                        SUBSCRIPTION
                    </li>
                    <li>
                        <div className="image">
                            <img src="/img/buy-comics-shop-locator.png" alt="buy-comics-shop-locator" />
                        </div>
                        COMIC SHOP LOCATOR
                    </li>
                    <li>
                        <div className="image">
                            <img src="/img/buy-dc-power-visa.svg" alt="buy-dc-power-visa" />
                        </div>
                        DC POWER VISA
                    </li>
                </ul>
              </nav>
            </div>

            <DcList />

        </div>
    )
}

export default DcMain