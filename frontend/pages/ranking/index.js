import React, { useState } from "react";
import { useRouter } from "next/router";
import PageTemplate from "@components/reusable/template/pageTemplate";
import Leaderboard from "./ranking-components/Leaderboard";
import StudentCharts from "./ranking-components/StudentCharts";
import PolarAreaCharts from "./ranking-components/PolarAreaChart"

const Sdata = [
  { name: "Apple", score: 100, currency: 12442, ethicspoints: 124 },
  { name: "Pear", score: 100, currency: 42, ethicspoints: 124 },
  { name: "John", score: 214, currency: 24, ethicspoints: 1244 },
  { name: "Jack", score: 21, currency: 424, ethicspoints: 12114 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },
  { name: "Super", score: 1, currency: 142, ethicspoints: 11424 },

  // More users...
];

function ranking() {
  const router = useRouter();

  return (
    <>
      <PageTemplate>
        <div className="grid grid-flow-col auto-cols-fr">
          <div className="items-center">
            <Leaderboard data={Sdata} />
          </div>
          <div className="my-10 mr-10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6x">
              My Progress
            </h1>
            <StudentCharts />
            <PolarAreaCharts />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default ranking;
