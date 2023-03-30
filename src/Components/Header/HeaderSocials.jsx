import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://whatsapp.com" target="_blank">
        <IoLogoWhatsapp />
      </a>
      <a href="https://call.com" target="_blank">
        <IoCallSharp />
      </a>
      <a href="https://mail.com" target="_blank">
        <SiGmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
