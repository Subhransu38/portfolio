import "./Skill.css";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SKILLS = [
  {
    id: 1,
    icon: <ImHtmlFive className="skill-details-icon" />,
    title: "HTML",
    level: "80%"
  },
  {
    id: 2,
    icon: <SiCss3 className="skill-details-icon" />,
    title: "CSS",
    level: "80%"
  },
  {
    id: 3,
    icon: <SiJavascript className="skill-details-icon" />,
    title: "JavaScript",
    level: "80%"
  },
  {
    id: 4,
    icon: <FaReact className="skill-details-icon" />,
    title: "React",
    level: "50%"
  },
  {
    id: 5,
    icon: <SiMysql className="skill-details-icon" />,
    title: "MySQL",
    level: "75%"
  },
  {
    id: 6,
    icon: <BsGit className="skill-details-icon" />,
    title: "Git",
    level: "75%"
  },
  {
    id: 7,
    icon: <BsGithub className="skill-details-icon" />,
    title: "Github",
    level: "75%"
  }
];

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I have</h5>
      <h2>My Skill</h2>
      <div className="container skill-container">
        {SKILLS.map(({ id, icon, title, level }) => {
          return (
            <article key={id} className="skill-details">
              <div className="skill-details-text">
                {icon}
                <h4>{title}</h4>
              </div>
              <div className="skill-details-level">
                <div className="bar" style={{ width: level }}>
                  <p className="bar-text">{level}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
