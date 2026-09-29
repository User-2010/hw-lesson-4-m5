import app from "../img/appLogos.svg";
import logo from "../img/logoSite.svg";
import simple from "../img/simple.png";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer_cont">
                <img src={logo} alt="logo" />

                <img src={app} alt="app" />
            </div>

            <div className="footer_bottom">
                <img src={simple} alt="simple" />
            </div>

        </footer>
    );
};

export default Footer;