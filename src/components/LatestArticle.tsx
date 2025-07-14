import React from "react";
import Image from "../models/image";
import "./styles/LatestArticle.css";

interface LatestArticleProps<T> {
  image: Image<T>;
  author: T;
  title: T;
  description: T;
}

const LatestArticle: React.FC<LatestArticleProps<string>> = (props: LatestArticleProps<string>) => (
  <div className="latest-article">
    <img src={props.image.source} alt={props.image.alt} />
    <div className="author">By {props.author}</div>
    <div className="title">{props.title}</div>
    <p>{props.description}</p>
  </div>
);

export default LatestArticle;
export type { LatestArticleProps };