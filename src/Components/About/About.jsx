import "./About.css";
import CTA from "../Header/CTA";

const EDUCATION = [
  {
    id: 1,
    course: "React- The Complete Guide",
    school: "Udemy, Instructors: Academind by Maximilian Schwarzmuller",
    score: "Completed",
    time: "February 2023"
  },
  {
    id: 2,
    course: "B. Tech in Computer Science and Engineering",
    school: "Centurion University of Technology and Management, Odisha",
    score: "7.99 CGPA",
    time: "2016 - 2020"
  },

  {
    id: 3,
    course: "Senior-Secondary (CHSE, ODISHA)",
    school: "Gayatri Junior College, Berhampur, Ganjam",
    score: "54.12%",
    time: "2014 - 2016"
  },
  {
    id: 4,
    course: "Matriculation (BSE, ODISHA)",
    school: "Govt. N.A.C. High School, Aska, Ganjam",
    score: "73.5%",
    time: "April 2014"
  }
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <p>
            I'm Subhransu Sekhar Rath. My interests are in Front End
            Engineering, and I love to create beautiful and performant products
            with delightful user. Outside the world of tech too, I enjoy
            experimenting with various flavors and ingredients to create
            delicious and unique dishes. I also like to explore new recipes and
            techniques through cookbooks and online resources.I love traveling
            too. In 2019, I went on a solo trip to Delhi, Haridwar, and Agra. I
            also enjoy riding motorcycles and often do 500km+ rides.
          </p>
          <CTA
            link="https://drive.google.com/drive/folders/1wDrawTFLFeowVaagW4Cw3gtrfJNSel1r?usp=sharing"
            btnText="Certificate"
          />
        </div>
        <div className="education">
          <div className="about__cards">
            {EDUCATION.map(({ id, course, school, score, time }) => {
              return (
                <article key={id} className="about__card">
                  <h2>{course}</h2>
                  <h5>{school}</h5>
                  <p>
                    <i>{score}</i>
                  </p>
                  <small>{time}</small>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
