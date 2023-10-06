import ECommerce from "../../../components/Dashboard/E-commerce";
import Leaderboard from "../../ranking/ranking-components/Leaderboard";

export const metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};


export default function Home() {

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

  return (
    <>
      <ECommerce />
      <Leaderboard data={Sdata} />
    </>
  );
}
