import ComicsList from "./lists/ComicsList"
import ShopList from "./lists/ShopList"
import OptionsList from "./lists/OptionsList"
import SitesList from "./lists/SitesList"

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
                    <OptionsList />
                </nav>
            </div>
            <div className="column3">
                <nav>
                    <SitesList />
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