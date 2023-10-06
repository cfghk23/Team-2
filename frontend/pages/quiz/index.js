import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, useSpring } from "framer-motion";
import PageTemplate from "@components/reusable/template/pageTemplate";
import Question from "./components/Question";

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

export default function quiz() {
  const router = useRouter();

  const numQuestions = Number(4);

  const [quiz, setQuiz] = useState([]); // array of questions
  const [isLoading, setIsLoading] = useState(false);

  const [numSubmitted, setNumSubmitted] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const [progress, setProgress] = useState(0);

  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.002,
  });

  useEffect(() => {
    const generateQuestions = async () => {
      console.log("loading...");
      setIsLoading(true);
      setQuiz([
        {
          query: "What is compound interest?",
          choices: [
            "Interest that is paid periodically on a loan",
            "Interest that is calculated only on the principal amount",
            "Interest that is earned on both the principal amount and the accumulated interest",
            "Interest that is charged on credit card balances",
          ],
          answer: 2,
          explanation:
            "Compound interest is the interest calculated on the initial principal amount as well as the accumulated interest from previous periods. It is calculated based on a fixed interest rate and the compounding frequency, which determines how often the interest is added to the principal. Over time, compound interest can significantly increase the total amount of money in an investment or loan.",
        },
        {
          query: "What is diversification?",
          choices: [
            "A risk management strategy that involves spreading investments across various assets",
            "A strategy to focus investments in a single asset for higher returns",
            "A method to minimize taxes on investments",
            "A technique to predict stock market movements",
          ],
          answer: 0,
          explanation:
            "Diversification is a risk management strategy that involves spreading investments across various asset classes, industries, or geographic regions to reduce exposure to any single investment. By diversifying a portfolio, an investor can potentially minimize losses in the event that one investment performs poorly, while benefiting from the positive performance of other investments. It aims to balance risk and reward by creating a mix of assets that have a low correlation with each other.",
        },
        {
          query: "What is a stock market index?",
          choices: [
            "A measure of the average stock price in the market",
            "A measure of the total market capitalization of all listed companies",
            "A statistical measure representing a selected basket of stocks",
            "A measure of the overall profitability of the stock market",
          ],
          answer: 2,
          explanation:
            "A stock market index is a statistical measure that represents a selected basket of stocks from a specific market or industry. It serves as a benchmark for the overall performance of the stock market or a particular sector. Stock market indices are typically calculated using a weighted average of the prices or market capitalizations of the constituent stocks. They provide investors with a way to track the performance of the market, compare their portfolio returns, and make informed investment decisions.",
        },
        {
          query: "What is a mutual fund?",
          choices: [
            "A type of investment that guarantees fixed returns",
            "A fund that invests exclusively in government securities",
            "A type of investment that offers high-risk, high-reward opportunities",
            "An investment vehicle that pools money from multiple investors to invest in a diversified portfolio",
          ],
          answer: 3,
          explanation:
            "A mutual fund is a type of investment vehicle that pools money from multiple investors to invest in a diversified portfolio of securities, such as stocks, bonds, or other assets. It is managed by professional fund managers who make investment decisions on behalf of the investors. Investors in a mutual fund own shares or units, which represent their proportionate ownership in the fund's holdings. Mutual funds offer individuals with limited capital an opportunity to access a diversified investment portfolio managed by professionals.",
        },
      ]);
      setIsLoading(true);
    };
    generateQuestions();
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [quiz]);

  useEffect(() => {
    // set progress 0 - 1
    setProgress(numSubmitted / numQuestions);

    // if all questions submitted
    if (numSubmitted === numQuestions && numQuestions !== 0) {
      const score = numCorrect / numSubmitted;
      router.push(`/end-screen?score=${score}`);
    }
  }, [numSubmitted]);

  useEffect(() => {
    // update progress bar
    scaleX.set(progress);
  }, [progress]);

  return (
    <PageTemplate>
      <div>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="pt-12">
          {quiz?.map((question, index) => (
            // <div>{question.query}</div>
            <div className="mb-12" key={index}>
              <Question
                question={question}
                id={index}
                key={index}
                setNumSubmitted={setNumSubmitted}
                setNumCorrect={setNumCorrect}
              />
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
