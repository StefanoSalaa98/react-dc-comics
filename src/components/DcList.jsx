import ComicsList from "./lists/ComicsList"
import ShopList from "./lists/ShopList"

const DcList = () => {
    return(
      <div className="sfondo">
        <div className="main-container">
          <div className="list-container">
            <div className="column1">
                <nav>
                    <ComicsList />
                </nav>
                <nav>
                    <ShopList />
                </nav>
            </div>
            <div className="column2">
                <nav>
                    <ul><h3>DC</h3>
                        <li>Therms Of Use</li>
                        <li>Privacy policy (New)</li>
                        <li>Add Choices</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </div>
            <div className="column3">
                <nav>
                    <ul><h3>SITES</h3>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                </nav>
            </div>
          </div>
          <div className="logo-bg">
          </div>
        </div>
      </div>
    )
}

export default DcList