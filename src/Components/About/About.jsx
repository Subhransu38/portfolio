import "./About.css";
import { FaAward } from "react-icons/fa";
import CTA from "../Header/CTA";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <p>
            🎓 I'm Subhransu Sekhar Rath, and I graduated from the Centurion
            University of Technology and Management in 2020 with a degree in
            Computer Science and Engineering. My interests are in Front End
            Engineering, and I love to create beautiful and performant products
            with delightful user experiences. 🔪 Outside the world of tech too,
            I enjoy experimenting with various flavors and ingredients to create
            delicious and unique dishes. I also like to explore new recipes and
            techniques through cookbooks and online resources. ✈️ I love
            traveling too. In 2019, I went on a solo trip to Delhi, Haridwar,
            and Agra. I also enjoy riding motorcycles and often do 500km+ rides.
          </p>
          <CTA
            link="https://drive.google.com/drive/folders/1wDrawTFLFeowVaagW4Cw3gtrfJNSel1r?usp=sharing"
            btnText="Certificate"
          />
        </div>
        <div className="about__content education">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Year</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Year</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Year</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit
            expedita voluptatibus, porro, magnam veniam praesentium maiores
            dolor obcaecati esse eum fugiat dignissimos eos autem error eligendi
            dolorem exercitationem quo?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
