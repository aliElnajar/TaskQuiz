import { reducerActionType, initialStateType } from "../../../types";

// i located initial state here to make the quetion component leaner and i used it in resetting 
export const initialState: initialStateType = {
  number: 0,
  score: 0,
  useranswer: "",
};

export const reducerFn = (
  state: initialStateType,
  action: reducerActionType
) => {
  let newerState = { ...state };
  switch (action.type) {
    case "NEXT_QUESTION":
      newerState = { ...state, number: state.number + 1, useranswer: "" };
      break;
    case "ANSWERED_CORRECTLY":
      newerState = {
        ...state,
        score: state.score + 1,
        useranswer: action.payload,
      };
      break;
    case "ANSWERED_INCORRECT":
      newerState = { ...state, useranswer: action.payload };
      break;
    case "RESET_STATE":
      return initialState;
    default:
      return newerState;
  }
  return newerState;
};
