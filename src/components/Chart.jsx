import React from "react";
import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import styles, { layout } from "../style";

/*Tokenomics - features */
// import { featuresChartData } from "../constants";
import Feature from "./about-feature/feature";
import "./css/aboutOri.css";

const group = [
  { symbol: "Community", color: "#22d3ee", value: 22 },
  { symbol: "Core Team", color: "#6b21a8", value: 18 },
  { symbol: "Reserve", color: "#0284c7", value: 10 },
  { symbol: "Partners", color: "#4338ca", value: 10 },
  { symbol: "Private Round", color: "#701a75", value: 10 },
  { symbol: "Developers", color: "#8b5cf6", value: 8 },
  { symbol: "Public Round", color: "#d946ef", value: 5 },
  { symbol: "Seed Round", color: "#f0abfc", value: 5 },
  { symbol: "Advisors", color: "#818cf8", value: 4 },
  { symbol: "Legal", color: "#c084fc", value: 3 },
  { symbol: "Marketing", color: "#c7d2fe", value: 3 },
  { symbol: "Founder", color: "#312e81", value: 2 },
];

export default function Chart() {
  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;

  return (
    <section
      className="play__about-chart"
      style={{
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >


      <div className="play__chart-container">
        <svg viewBox={`0 0 ${width} ${width}`} width="70vw" height="70vh">
          <Group top={half} left={half}>
            <Pie
              data={group}
              pieValue={(data) => data.value}
              outerRadius={half}
              innerRadius={({ data }) => {
                const size = active && active.symbol == data.symbol ? 80 : 50;
                return half - size;
              }}
              padAngle={0.01}
            >
              {(pie) => {
                return pie.arcs.map((arc) => {
                  return (
                    <g
                      key={arc.data.symbol}
                      onMouseEnter={() => setActive(arc.data)}
                      onMouseLeave={() => setActive(null)}
                    >
                      <path d={pie.path(arc)} fill={arc.data.color}></path>
                    </g>
                  );
                });
              }}
            </Pie>

            {active ? (
              <>
                <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                  {`${Math.floor(active.value)}%`}
                </Text>

                <Text
                  textAnchor="middle"
                  fill={active.color}
                  fontSize={20}
                  dy={20}
                >
                  {`${active.symbol}`}
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                  {`${group.reduce((acc, group) => acc + group.value, 0)}%`}
                </Text>

                <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                  {`${group.length} Token Holders`}
                </Text>
              </>
            )}
          </Group>
        </svg>
      </div>
    </section>
  );
}
