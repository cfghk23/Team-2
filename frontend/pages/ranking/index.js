import React, { useState } from "react";
import { useRouter } from "next/router";
import PageTemplate from "@components/reusable/template/pageTemplate";
import Leaderboard from "./ranking-components/Leaderboard"

const data = [
  { name: 'Apple', score: 100, currency: 12442, ethicspoints: 124 },
  { name: 'Pear', score: 100, currency: 42, ethicspoints: 124 },
  { name: 'John', score: 214, currency: 24, ethicspoints: 1244 },
  { name: 'Jack', score: 21, currency: 424, ethicspoints: 12114 },
  { name: 'Super', score: 1, currency: 142, ethicspoints: 11424 },
  
  // More users...
];



function ranking() {
    const router = useRouter();

return (
    <>
      <PageTemplate>
        <Leaderboard data={data}/>
      </PageTemplate>
    </>
  );
}

export default ranking;