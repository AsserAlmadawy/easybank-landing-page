import "./styles/Header.css";
import {  useRef, useState } from "react";

const Header: React.FC = () => {
  const activateHome: () => void = () => homeRef.current!.style.cssText = "scale: 1.3; border-bottom: 3px solid currentColor; color: linear-gradient(rgba(0, 255, 0, 0.65), rgb(0, 191, 255, 0.75);";
  const activateWhy: () => void = () => whyRef.current!.style.cssText = "scale: 1.3; border-bottom: 3px solid currentColor; color: linear-gradient(rgba(0, 255, 0, 0.65), rgb(0, 191, 255, 0.75);";
  const activateArticles: () => void = () => articlesRef.current!.style.cssText = "scale: 1.3; border-bottom: 3px solid currentColor; color: linear-gradient(rgba(0, 255, 0, 0.65), rgb(0, 191, 255, 0.75);";
  const deactivateHome: () => void = () => homeRef.current!.style.cssText = "scale: 1; border-bottom: 3px solid transparent;";
  const deactivateWhy: () => void = () => whyRef.current!.style.cssText = "scale: 1; border-bottom: 3px solid transparent;";
  const deactivateArticles: () => void = () => articlesRef.current!.style.cssText = "scale: 1; border-bottom: 3px solid transparent;";
  const scrollToHome: () => void = () => scrollTo({ top: 0, behavior: "smooth" });
  const scrollToWhy: () => void = () => scrollTo({ top: 692, behavior: "smooth" });
  const scrollToArticles: () => void = () => scrollTo({ top: 1258, behavior: "smooth" });

  const homeRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(1000);

  window.addEventListener("load", () => {
    if (menuRef.current) menuRef.current.style.opacity = "0"
  });

  window.addEventListener("resize", () => setWidth(innerWidth));

  const menuDropdown: () => void = () => {
    if (flexRef.current) {
      flexRef.current.style.cssText = `
      flex-direction: column;
      transform: rotateX(0deg);
      translate: 120px 75px;
      height: 200px;
      background-color: #000;
      color: #fff;
      width: 150px;
      `;
    }

    if (menuRef.current) menuRef.current.classList.add("x");
  };

  if (menuRef.current) {
    if (width <= 730) {
      menuRef.current.style.opacity = "1";
    } else {
      menuRef.current.style.opacity = "0";
    }
  }

  return (
    <div className="parent">
      <div className="logo">
        <img src="icons/logo.svg" alt="Logo" />
      </div>
      <div className="header-flex" ref={flexRef}>
        <div className="header-text" onMouseOver={activateHome} onMouseLeave={deactivateHome} onClick={scrollToHome} ref={homeRef}>
          Home
        </div>
        <div className="header-text" onMouseOver={activateWhy} onMouseLeave={deactivateWhy} onClick={scrollToWhy} ref={whyRef}>
          Why?
        </div>
        <div className="header-text last" onMouseOver={activateArticles} onMouseLeave={deactivateArticles} onClick={scrollToArticles} ref={articlesRef}>
          Latest Articles
        </div>
      </div>
      <div className="menu" ref={menuRef} onClick={menuDropdown}>
        <div className="line one"></div>
        <div className="line two"></div>
        <div className="line three"></div>
      </div>
    </div>
  );
};

export default Header;