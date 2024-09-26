import style from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={style.container}>
      <div className={style.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={style.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mylinkedin" target="_blank">
            linkedin.com/myname
          </a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
