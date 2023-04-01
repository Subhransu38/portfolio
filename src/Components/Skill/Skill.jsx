import "./Skill.css";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiJson } from "react-icons/si";

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I have</h5>
      <h2>My Skill</h2>

      <div className="container skill__container">
        <div className="skill__content">
          <article className="skill__details">
            <ImHtmlFive />
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <SiCss3 />
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <SiJavascript />
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <FaReact />
            <h4>React</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <SiMysql />
            <h4>MySQL</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <BsGit />
            <h4>Git</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <BsGithub />
            <h4>Github</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="skill__details">
            <SiJson />
            <h4>JSON</h4>
            <small className="text-light">Experienced</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skill;
