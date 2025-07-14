import { useState, useRef, useEffect } from "react";
import "./styles/LatestArticles.css";

interface LatestArticlesProps {
  children: React.ReactNode;
}

const LatestArticles: React.FC<LatestArticlesProps> = (
  props: LatestArticlesProps
) => {
  const [yPosition, setYPosition] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => document.addEventListener("scroll", () => setYPosition(scrollY)));

  if (ref.current) {
    if (yPosition >= 1000) {
      ref.current.classList.add("active-articles");
    } else {
      ref.current.classList.remove("active-articles");
    }
  }

  return (
    <div className="latest-articles-container">
      <h1>Latest Articles</h1>
      <div className="latest-articles" ref={ref}>
        {props.children}
      </div>
    </div>
  );
};

export default LatestArticles;