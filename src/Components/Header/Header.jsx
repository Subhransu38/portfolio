import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/devimg.png";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <div className="header__content">
            <h5>Hello I'm</h5>
            <h1>Subhransu Sekhar Rath</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA link="#contact" btnText="Let's Talk" />
            <HeaderSocials />
          </div>

          <div className="header__container-image">
            <div className="header__image">
              <img src={ME} alt="Subhransu" />
            </div>
          </div>
        </div>
      </div>

      <div className="down-arrow-container">
        <a className="down-arrow-btn" href="#about">
          <BsArrowDownCircleFill />
        </a>
      </div>
    </header>
  );
};

export default Header;
