import React from "react";
import "../../components_css/card.css";
const Card = (props) => {
  return (
    <button id="card-layout">
      <img src={props.src} alt={props.alt} />
      <h3 id="service-title">{props.title}</h3>
      <h4 id="service-description">{props.description}</h4>
    </button>
  );
};
export default Card;
