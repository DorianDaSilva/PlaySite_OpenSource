import React from 'react';
import './feature.css';

const Feature = ({ title, text, text2, text3, text4 }) => (
  <div className="play__features-container__feature">
    <div className="play__features-container__feature-title-text">
      <h1>{title}</h1>
    </div>
    <div className="play__features-container_feature-text">
      <p>{text} <br/> {text2} <br/> {text3} <br/> {text4} </p>
    </div>
  </div>
);

export default Feature;