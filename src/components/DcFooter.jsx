const DcFooter = () => {
    return(
        <div className="sfondo-grigio">
            <div className="footer">
                <a href="#">
                    <button className="sing-up">
                        SING-UP NOW!
                    </button>
                </a>
                <div className="follow">
                    <strong>FOLLOW US</strong>
                    <ul>
                        <li>
                            <div className="image">
                                <a href="#">
                                    <img src="/img/footer-facebook.png" alt="footer-facebook" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <a href="#">
                                    <img src="/img/footer-periscope.png" alt="footer-periscope" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <a href="#">
                                    <img src="/img/footer-pinterest.png" alt="footer-pinterest" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <a href="#">
                                    <img src="/img/footer-twitter.png" alt="footer-twitter" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <a href="#">
                                    <img src="/img/footer-youtube.png" alt="footer-youtube" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DcFooter