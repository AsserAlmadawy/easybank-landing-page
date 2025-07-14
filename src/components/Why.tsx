import { useState, useRef, useEffect } from "react";
import "./styles/Why.css";

interface WhyProps {
  children: React.ReactNode;
}

const Why: React.FC<WhyProps> = (props: WhyProps) => {
  const [yPosition, setYPosition] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => document.addEventListener("scroll", () => setYPosition(scrollY)));
  const [width, setWidth] = useState<number>(1000);

  window.addEventListener("resize", () => setWidth(innerWidth));
  if (ref.current) {
    
    if (yPosition >= 231 && yPosition <= 1100) {
      ref.current.classList.add("active");
    } else {
      ref.current.classList.remove("active");
    }
  }

  return (
    <div className="why-container">
      <div className="why-text">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage open banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="why-parts" ref={ref}>{props.children}</div>
    </div>
  );
};

export default Why;