import { getImageUrl } from "../../utils";
import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.container} id="about">
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
            <ul className={style.aboutItems}>
                <li className={style.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="cursor icon" className={style.aboutImage}/>
                    <div className={style.aboutItemText}>
                        <h3>Fontend Developer</h3>
                        <p>I'm a fronted developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li className={style.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="server icon" className={style.aboutImage}/>
                    <div className={style.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience with developing fast and optimized backend APIs</p>
                    </div>
                </li>
                <li className={style.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt="server icon" className={style.aboutImage}/>
                    <div className={style.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have created design system as well</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
};

export default About;
