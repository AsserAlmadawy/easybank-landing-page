import "./styles/Header.css";

const Header: React.FC = () => {
  const activate: (e: Event) => void = (e: Event) => (e.target! as HTMLElement).style.cssText = "scale: 1.5; border-bottom: 3px solid currentColor; color: linear-gradient(rgba(0, 255, 0, 0.65), rgb(0, 191, 255, 0.75);";
  const deactivate: (e: Event) => void = (e: Event) => (e.target! as HTMLElement).style.cssText = "scale: 1; border-bottom: 3px solid transparent;";
  const scrollToHome: () => void = () => scrollTo({ top: 0, behavior: "smooth" });
  const scrollToWhy: () => void = () => scrollTo({ top: 692, behavior: "smooth" });
  const scrollToArticles: () => void = () => scrollTo({ top: 1258, behavior: "smooth" });

  return (
    <div className="parent">
      <div className="logo">
        <img src="icons/logo.svg" alt="Logo" />
      </div>
      <div className="header-flex">
        <div className="header-text" onMouseOver={activate} onMouseLeave={deactivate} onClick={scrollToHome}>
          Home
        </div>
        <div className="header-text" onMouseOver={activate} onMouseLeave={deactivate} onClick={scrollToWhy}>
          Why?
        </div>
        <div className="header-text last" onMouseOver={activate} onMouseLeave={deactivate} onClick={scrollToArticles}>
          Latest Articles
        </div>
      </div>
    </div>
  );
};

export default Header;
