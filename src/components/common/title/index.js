import React from "react";
import "./Title.css";

const Title = ({ title, desc }) => (
  <div className='section__title text-center mb-40'>
    <h2>{title}</h2>
    <p>{desc}</p>
  </div>
);

export default Title;
