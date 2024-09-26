import style from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <a className={style.title} href="/">
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-buttton"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
