import React from 'react';
import { useRouter } from 'next/router';
import styles from './GameList.module.scss';
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";

const games = [
    {
      id: 1,
      name: "Learning Coins",
      description: "Learning Coins provides kids with an introduction to what each of the different coins is, how to recognize them, and what they’re worth.",
      image: "https://source.unsplash.com/1400x400/?dollar",
    },
    {
      id: 2,
      name: "Money Bingo",
      description: "Money Bingo lets kids put their coin knowledge to use, along with some math skills, to fill a virtual bingo card.",
      image: "https://source.unsplash.com/1400x400/?bingo",
    },
    {
      id: 3,
      name: "Cash Register Simulator",
      description: "Cash Register Simulator allows kids to practice their money counting and calculation skills by running a virtual cash register in a store setting.",
      image: "https://source.unsplash.com/1400x400/?cash",
    },
    {
      id: 4,
      name: "Money Maze",
      description: "Money Maze is a fun puzzle game where players have to navigate through a maze while collecting coins and avoiding obstacles.",
      image: "https://source.unsplash.com/1400x400/?maze",
    },
    {
      id: 5,
      name: "Counting Dollars",
      description: "Counting Dollars helps kids practice counting money by presenting them with various money amounts and asking them to calculate the total.",
      image: "https://source.unsplash.com/1400x400/?counting",
    },
    {
        id: 6,
        name: "Money Match",
        description: "Money Match challenges kids to match different amounts of money with their corresponding values and representations.",
        image: "https://source.unsplash.com/1400x400/?match",
      },
      {
        id: 7,
        name: "Coin Sorting Challenge",
        description: "Coin Sorting Challenge tests kids' ability to sort different coins based on their type, value, or other attributes.",
        image: "https://source.unsplash.com/1400x400/?sorting",
      },
      {
        id: 8,
        name: "Money Word Search",
        description: "Money Word Search is a word puzzle game where kids have to find and circle words related to coins, money, and finance.",
        image: "https://source.unsplash.com/1400x400/?wordsearch",
      },
  ];

const GameList = () => {
  const router = useRouter();

  const handleGameClick = (gameId) => {
    router.push(`/game`);
  };

  return (
    <PageTemplate>
    <div className={styles.gameList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameCard} onClick={() => handleGameClick(game.id)}>
          <img src={game.image} alt={game.name} className={styles.gameCardImage} />
          <h2 className={styles.gameCardName}>{game.name}</h2>
          <p className={styles.gameCardDescription}>{game.description}</p>
        </div>
      ))}
    </div>
    </PageTemplate>
  );
};

export default GameList;