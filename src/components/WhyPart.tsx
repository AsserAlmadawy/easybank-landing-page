import React from "react";
import Image from "../models/image";
import "./styles/WhyPart.css";

interface WhyPartProps<T> {
  image: Image<T>;
  title: T;
  text: T;
}

const Part: React.FC<WhyPartProps<string>> = (props: WhyPartProps<string>) => (
  <div className="why-part-container">
    <img src={props.image.source} alt={props.image.alt} />
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </div>
);

export default Part;
export type { WhyPartProps };