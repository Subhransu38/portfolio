import "./Footer.css";
import LOGO from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={LOGO} alt="logo" />
      </div>

      <div className="footer__copyright">
        <small>SUBHRANSU SEKHAR RATH &copy; 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
