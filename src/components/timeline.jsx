import React from "react";
import "./css/roadmap.css";
import { timelinedata } from "../constants/index";
import {
  hologram,
  neptune,
  oceanicplanet,
  terranplanet,
  waterplanet,
} from "./assets/index";
import "./css/aboutOri.css"

const _timeline = ({ data }) => {
  return (
    <div id="roadmap" className="timeline">
      <div className="outer">
        {data.map((item) => (
          <Card key={item.id} title={item.title}>
            <p>{item.content1}</p>
            <p>{item.content2}</p>
            <p>{item.content3}</p>
            <p>{item.content4}</p>
            <p>{item.content5}</p>
            <p>{item.content6}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const _timeline2 = ({ data }) => {
  return (
    <div className="timeline">
      <div className="outer">
        {data.map((item) => (
          <Card2 key={item.id} title={item.title}>
            <p>{item.content1}</p>
            <p>{item.content2}</p>
            <p>{item.content3}</p>
            <p>{item.content4}</p>
            <p>{item.content5}</p>
            <p>{item.content6}</p>
          </Card2>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="info ">
        <h3 className="title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Card2 = ({ title, children }) => {
  return (
    <div className="card2">
      <div className="info">
        <h3 className="title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData1 = timelinedata.slice(0, 4);
  const timelineData2 = timelinedata.slice(4, 8);

  return (
    <div>
      <h1 className="roadmap-title">Roadmap</h1>
      <div className="container play__section">
        <div className="column1">
          <_timeline data={timelineData1} />
        </div>
        <div className="column2">
          <img
            src={neptune}
            alt="neptune"
            style={{
              width: "45%",
              height: "auto",
              objectFit: "cover",
              marginTop: "17%",
              marginLeft: "25%",
            }}
          />
          <img
            src={waterplanet}
            alt="waterplanet"
            style={{
              width: "45%",
              height: "auto",
              objectFit: "cover",
              marginTop: "17%",
              marginLeft: "25%",
            }}
          />

          <img
            src={oceanicplanet}
            alt="oceanicplanet"
            style={{
              width: "45%",
              height: "auto",
              objectFit: "cover",
              marginTop: "18%",
              marginLeft: "25%",
            }}
          />

          <img
            src={terranplanet}
            alt="terranplanet"
            style={{
              width: "45%",
              height: "auto",
              objectFit: "cover",
              marginTop: "17%",
              marginLeft: "26%",
            }}
          />
        </div>

        <div className="column3">
          <_timeline2 data={timelineData2} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
