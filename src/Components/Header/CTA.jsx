import CV from "../../assets/subhransu-resume.pdf";
const CTA = (props) => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={props.link} className="btn btn-primary">
        {props.btnText}
      </a>
    </div>
  );
};
export default CTA;
