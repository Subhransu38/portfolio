import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { BiMessageDetail, BiUser } from "react-icons/bi";
import { useState } from "react";
import LOGO from "../../assets/logo.png";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className="nav-logo">
        <img src={LOGO} alt="logo" />
      </div>
      <ul className="nav-link-holder">
        <li>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <span className="icon">
              <AiOutlineHome style={{ verticalAlign: "middle" }} />
            </span>
            <span className="link-text">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <span className="icon">
              <BiUser style={{ verticalAlign: "middle" }} />
            </span>
            <span className="link-text">About</span>
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => setActiveNav("#project")}
            className={activeNav === "#project" ? "active" : ""}
          >
            <span className="icon">
              <FaLaptopCode style={{ verticalAlign: "middle" }} />
            </span>
            <span className="link-text">Project</span>
          </a>
        </li>
        <li>
          <a
            href="#skill"
            onClick={() => setActiveNav("#skill")}
            className={activeNav === "#skill" ? "active" : ""}
          >
            <span className="icon">
              <SlGraduation style={{ verticalAlign: "middle" }} />
            </span>
            <span className="link-text">Skill</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <span className="icon">
              <BiMessageDetail style={{ verticalAlign: "middle" }} />
            </span>
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
