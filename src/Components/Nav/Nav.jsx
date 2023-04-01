import "./Nav.css";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className="nav-logo">
        <h3>SSR</h3>
      </div>
      <ul className="nav-link-holder">
        <li>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BiHome className="icon" />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <BiUser className="icon" />
            <span className="link-text">About</span>
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => setActiveNav("#project")}
            className={activeNav === "#project" ? "active" : ""}
          >
            <AiOutlineExperiment className="icon" />
            <span className="link-text">Project</span>
          </a>
        </li>
        <li>
          <a
            href="#skill"
            onClick={() => setActiveNav("#skill")}
            className={activeNav === "#skill" ? "active" : ""}
          >
            <BiBook className="icon" />
            <span className="link-text">Skill</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail className="icon" />
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
