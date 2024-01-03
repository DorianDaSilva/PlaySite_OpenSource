import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap items-center justify-center relative w-full lg:w-3/4 mx-auto Stats`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`${styles.flexCenter} flex-1 flex justify-start items-center flex-row m-10`}
      >
        <h4 className="font-poppins font-semibold text-2xl xs:text-4xl text-white leading-tight xs:leading-tight">
          {stat.value}
        </h4>

        <p className="font-poppins font-normal text-sm xs:text-base text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
