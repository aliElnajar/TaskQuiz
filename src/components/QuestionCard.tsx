"use client";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { reducerFn, initialState } from "../app/utils/reducer";
import Progressbar from "./Progressbar";
import SingleChoice from "./SingleChoice";
import { fetchedQuestions } from "../../types";
const QuestionCard = ({ questions, options }: fetchedQuestions) => {
  const router = useRouter();
  const [{ number, score, useranswer }, dispatch] = useReducer(
    reducerFn,
    initialState
  );
  let { word, pos: correct_answer } = questions[number];

  // dispatching action assessing score of the user
  const onChooseHandler = (e: React.MouseEvent) => {
    const el = e.target as HTMLInputElement;
    const userChoice = el.innerHTML;
    if (userChoice === correct_answer) {
      dispatch({ type: "ANSWERED_CORRECTLY", payload: userChoice });
    } else {
      dispatch({ type: "ANSWERED_INCORRECT", payload: userChoice });
    }
  };

  // at last question it'll reset the state 
  //navigate the user to rank page and send score in encrypted pathname with 
  const shiftingToRankPage = () => {
    const id =
      Math.random().toString(36).slice(-6).replace(/[0-9]/g, "") + score * 10;
    router.replace(`/rank/${id}`);
    dispatch({ type: "RESET_STATE" });
  };

  // will dispatch action getting next question or calling the function that wraps the questions and navigate
  const nextQuestionHandler = () => {
    if (number >= 9) {
      shiftingToRankPage();
      return;
    }
    dispatch({ type: "NEXT_QUESTION" });
  };

  return (
    <div className="flex flex-col space-y-11 ">
      <Progressbar number={number} useranswer={useranswer} />
      <h1 className="text-xl italic text-gray-100 mb-[30px] text-left">
        the word '{word}' is
      </h1>
      <div className="flex flex-col space-y-5">
        {options?.map((option: any, i: number) => (
          <SingleChoice
            key={i}
            number={i + 1}
            option={option}
            correct_answer={correct_answer}
            useranswer={useranswer}
            onChooseHandler={onChooseHandler}
          />
        ))}
      </div>
      <button
        onClick={nextQuestionHandler}
        disabled={!useranswer}
        className="button"
      >
        {number < 9 ? "next" : "see my rank"}
      </button>
    </div>
  );
};

export default QuestionCard;
