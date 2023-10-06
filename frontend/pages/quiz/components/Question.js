import { useEffect, useState } from "react";

// import { HiCheck, HiOutlineXMark } from "react-icons/hi2";

const Question = ({ question, id, setNumSubmitted, setNumCorrect }) => {
  const { query, choices, answer, explanation } = question;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExplained, setIsExplained] = useState(false);
  const [hintIsShown, setHintIsShown] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(-1);

  const [choiceObjects, setChoiceObjects] = useState(() =>
    choices.map((choice) => ({
      text: choice,
      isSelected: false,
    }))
  );

  const isCorrect = () => {
    return Number(answer) === selectedChoiceIndex;
  };

  const handleChoiceSelect = (choiceIndex) => {
    if (isSubmitted) return;

    setSelectedChoiceIndex(choiceIndex);
    setIsSelected(true);

    setChoiceObjects((prevChoiceObjects) =>
      prevChoiceObjects.map((choice, index) => {
        return {
          ...choice,
          isSelected: choiceIndex === index ? true : false,
        };
      })
    );
  };

  const handleAnswerSubmit = (e) => {
    if (isSubmitted) return;

    setIsSubmitted(true);

    setNumSubmitted((prevNumSubmitted) => prevNumSubmitted + 1);

    setSelectedChoiceIndex(
      choiceObjects.findIndex((choice) => choice.isSelected)
    );

    if (isCorrect()) {
      setNumCorrect((prevNumCorrect) => prevNumCorrect + 1);
      setIsExplained(true);
    }
  };

  const handleExplain = () => {
    setIsExplained(true);
  };

  const handleBuyHint = () => {
    setHintIsShown(true);
  };

  const submitButtonStyles = () => {
    let style = isSelected
      ? "pointer-events-auto bg-cyan-600/75"
      : "pointer-events-none border-gray-500 bg-stone-700";
    style = isSubmitted
      ? "pointer-events-none border-gray-500 bg-stone-700 opacity-50"
      : style;
    return style;
  };

  const explainButtonStyles = () => {
    let style = isExplained
      ? "pointer-events-none opacity-50"
      : "pointer-events-auto";
    return style;
  };

  const hintButtonStyles = () => {
    let style = hintIsShown
      ? "pointer-events-none opacity-50"
      : "pointer-events-auto";
    return style;
  };

  const renderChoices = () => {
    return choiceObjects?.map((choice, index) => {
      let style = "";

      style = choice.isSelected
        ? "border-cyan-600/75 bg-cyan-600/20"
        : "border-gray-500 hover:bg-cyan-600/10";

      let checkOrX = null;

      if (isSubmitted) {
        if (index === selectedChoiceIndex) {
          if (isCorrect()) {
            style = "border-emerald-300 bg-emerald-300/10";
            checkOrX = <div>{/* <HiCheck size={30} color="#6ee7b7" /> */}</div>;
          } else {
            style = "border-red-400 bg-red-400/10";
            checkOrX = (
              <div>{/* <HiOutlineXMark size={30} color="#f87171" /> */}</div>
            );
          }
        }
      }

      if (isExplained) {
        if (index === Number(answer)) {
          style = "border-emerald-300 bg-emerald-300/10";
          checkOrX = <div>{/* <HiCheck size={30} color="#6ee7b7" /> */}</div>;
        }
      }

      return (
        <div
          key={index}
          className={`w-full p-4 text-left border rounded cursor-pointer ${style} flex items-center justify-between`}
          onClick={() => handleChoiceSelect(index)}
        >
          <pre className=" whitespace-pre-wrap">
            {/* <code>{choice.text}</code> */}
            {/* <code className=' bg-opacity-0 '>{choice.text}</code> */}
            <code
              className="rounded"
              style={{
                padding: 5,
                backgroundColor: "transparent",
              }}
            >
              {choice.text}
            </code>
          </pre>

          {checkOrX}
        </div>
      );
    });
  };

  useEffect(() => {
    // Probably not a good way to do this.
    // Maybe each choice should be it's own component at this point.
    setChoiceObjects(
      choices.map((choice) => ({
        text: choice,
        isSelected: false,
      }))
    );
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-sm font-semibold text-gray-300/80">
        Question {id + 1}
      </h2>
      <div className="border border-gray-500/0 rounded">
        <div className="py-2 mt-2 text-xl">{query}</div>
        <div className="grid gap-2 mt-4">{renderChoices()}</div>
        <div className="flex items-center justify-end gap-2 mt-2 itesm">
          {isSubmitted && (
            <button
              onClick={handleExplain}
              className={`px-6 py-3  border-gray-500 rounded bg-stone-700 hover:bg-stone-600 ${explainButtonStyles()}`}
            >
              Explain
            </button>
          )}
          {!isSubmitted && (
            <button
              onClick={handleBuyHint}
              className={`px-6 py-3 items-center flex flex-row  border-gray-500 rounded bg-stone-700 hover:bg-stone-600 ${hintButtonStyles()}`}
            >
              <p>Buy a Hint</p>
              <svg
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 291.764 291.764"
                fill="#000000"
                className="ml-2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      style={{ fill: "#EFC75E" }}
                      d="M145.882,0c80.573,0,145.882,65.319,145.882,145.882s-65.31,145.882-145.882,145.882 S0,226.446,0,145.882S65.31,0,145.882,0z"
                    ></path>{" "}
                    <path
                      style={{ fill: "#CC9933" }}
                      d="M145.882,27.353c-65.465,0-118.529,53.065-118.529,118.529s53.065,118.529,118.529,118.529 s118.529-53.065,118.529-118.529S211.347,27.353,145.882,27.353z M145.882,246.176c-55.39,0-100.294-44.904-100.294-100.294 S90.493,45.588,145.882,45.588s100.294,44.904,100.294,100.294S201.281,246.176,145.882,246.176z M158.009,138.269 c-5.452-2.289-25.493-5.452-25.493-14.214c0-6.464,7.495-8.334,11.99-8.334c4.094,0,8.999,1.295,11.589,3.875 c1.641,1.577,2.316,2.726,2.854,4.313c0.684,1.869,1.094,3.875,3.684,3.875h13.357c3.136,0,3.957-0.574,3.957-4.021 c0-14.789-11.589-23.122-24.809-25.994V86.28c0-2.58-0.821-4.167-3.957-4.167h-10.64c-3.136,0-3.957,1.577-3.957,4.167v11.051 c-14.178,2.726-26.031,11.634-26.031,27.718c0,18.235,12.683,23.979,26.441,28.566c11.589,3.884,23.724,4.021,23.724,12.063 s-5.99,9.765-13.357,9.765c-5.051,0-10.631-1.304-13.366-4.741c-1.769-2.152-2.453-4.021-2.58-5.89 c-0.274-3.592-1.769-4.021-4.914-4.021H113.28c-3.136,0-3.957,0.729-3.957,4.021c0,16.366,13.093,26.286,27.262,29.441v11.206 c0,2.58,0.821,4.167,3.957,4.167h10.64c3.136,0,3.957-1.586,3.957-4.167v-10.905c16.084-2.453,27.125-12.209,27.125-29.441 C182.28,145.591,167.829,141.424,158.009,138.269z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="ml-1">10</p>
            </button>
          )}
          <button
            onClick={handleAnswerSubmit}
            className={`px-6 py-3   rounded ${submitButtonStyles()}`}
          >
            {isSubmitted ? "Submitted" : "Submit"}
          </button>
        </div>
        {((isSubmitted && isCorrect()) || isExplained) && (
          <div className="mt-2 p-4 rounded bg-stone-700/50">
            <h3 className="text-emerald-300/60 text-sm font-bold">
              Explanation
            </h3>
            <p className="mt-2 text-sm font-light">{explanation}</p>
          </div>
        )}
        {hintIsShown && (
          <div className="mt-2 p-4 rounded bg-stone-700/50">
            <h3 className="text-emerald-300/60 text-sm font-bold">
              This is a hint
            </h3>
            <p className="mt-2 text-sm font-light">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Question;
