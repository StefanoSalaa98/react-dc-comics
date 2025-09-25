const ShopList = () => {

    const shops = [
        {
            id:1,
            url:"#",
            text:"Shop DC"
        },
        {
            id:2,
            url:"#",
            text:"Shop Dc colectibles"
        }
    ]

    return (

        <ul>
            <h3>SHOP</h3>
            {shops.map(shop =>
                <li key={"shop" + shop.id}>
                    <a href={shop.url}> {shop.text} </a>
                </li>
            )}
        </ul>
    )

}

export default ShopList