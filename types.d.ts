export type initialStateType = {
  number: number;
  score: number;
  useranswer: string;
};

interface actionwithoutpayload {
  type: "NEXT_QUESTION" | "RESET_STATE";
}
interface actionwithpayload {
  type: "ANSWERED_CORRECTLY" | "ANSWERED_INCORRECT";
  payload: string;
}
export type reducerActionType = actionwithpayload | actionwithoutpayload;

type question = {
  word: string;
  pos: string;
  id: number;
};

export type fetchedQuestions = {
  questions: question[];
  options: string[];
};

export type SingleChoiceProps = {
  option: string;
  useranswer: string;
  number: number;
  correct_answer: string;
  onChooseHandler: (e: React.MouseEvent) => void;
};

export type progressbarProps = {
  number: number;
  useranswer: string;
};
