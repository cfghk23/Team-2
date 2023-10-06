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
          query: "What is JS?",
          choices: ["A", "B", "C", "D"],
          answer: "0",
          explanation: "Explanation",
        },
        {
          query: "What is Python?",
          choices: ["A", "B", "C", "D"],
          answer: "0",
          explanation: "Explanation",
        },
        {
          query: "What is TS?",
          choices: ["A", "B", "C", "D"],
          answer: "0",
          explanation: "Explanation",
        },
        {
          query: "What is Java?",
          choices: ["A", "B", "C", "D"],
          answer: "0",
          explanation: "Explanation",
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
