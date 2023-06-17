import { SingleChoiceProps } from "../../types";
const SingleChoice = ({
  option,
  useranswer,
  onChooseHandler,
  number,
  correct_answer,
}: SingleChoiceProps) => {

  //that const just changing the choosen answer letting user know if its correct or not , without showing the correct answer if he's incorrect
  const stylingCondition =
  useranswer === option && correct_answer === useranswer
  ? "w-[80%]  disabled:btn-success"
  : useranswer === option && correct_answer !== useranswer
  ? "w-[80%]  disabled:btn-error"
  : "";
  
  // all buttons will be disabled one user choosed so he can't change the answer after knowing it's incorrect
  return (
    <div className="flex flex-row py-1 px-3 space-x-2 items-center">
      <p className="text-gray-100">{number}-</p>
      <button
        className={`btn focus:border-none w-[60%] disabled:btn-neutral
      ${stylingCondition} 
      `}
        onClick={(e) => onChooseHandler(e)}
        disabled={!!useranswer}
      >
        {option}
      </button>
    </div>
  );
};

export default SingleChoice;
