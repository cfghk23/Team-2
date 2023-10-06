import React, { useState } from "react";
import { useRouter } from "next/router";
import PageTemplate from "@components/reusable/template/pageTemplate";
import Leaderboard from "./ranking-components/Leaderboard";
import StudentCharts from "./ranking-components/StudentCharts";
import PolarAreaCharts from "./ranking-components/PolarAreaChart";

const Sdata = [
  {
    name: "Apple",
    score: 100,
    currency: 12442,
    ethicspoints: 124,
    photo: "https://picsum.photos/id/100/200",
  },
  {
    name: "Pear",
    score: 100,
    currency: 42,
    ethicspoints: 124,
    photo: "https://picsum.photos/id/101/200",
  },
  {
    name: "Jack",
    score: 21,
    currency: 424,
    ethicspoints: 12114,
    photo: "https://picsum.photos/id/103/200",
  },
  {
    name: "Super",
    score: 1,
    currency: 142,
    ethicspoints: 11424,
    photo: "https://picsum.photos/id/107/200",
  },
  {
    name: "Dan",
    score: 1,
    currency: 142,
    ethicspoints: 11424,
    photo: "https://picsum.photos/id/108/200",
  },
  {
    name: "Dani",
    score: 1,
    currency: 142,
    ethicspoints: 11424,
    photo: "https://picsum.photos/id/109/200",
  },
  {
    name: "Danis",
    score: 1,
    currency: 142,
    ethicspoints: 11424,
    photo: "https://picsum.photos/id/110/200",
  },
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
            <div class="rounded overflow-hidden shadow-lg p-10">
              <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-black">
                Ranking over time
              </h2>
              <StudentCharts />
            </div>

            <div class="mt-5 rounded overflow-hidden shadow-lg p-10">
              <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-black">
                Topic mastery
              </h2>
              <PolarAreaCharts />
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default ranking;
