import { getImageUrl } from "../../utils";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi, I'm Ana</h1>
        <p className={style.description}>
          I'm a full-stack developer with 5 years of experience using React and
          Node js. Reach out if you'd like to learn more!
        </p>
        <a href="#" className={style.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={style.heroImg} />
      <div className={style.topBlur}/>
      <div className={style.bottomBlur}/>
    </section>
  );
};

export default Hero;
