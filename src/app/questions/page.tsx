"use client";
import { use } from "react";
import datafetching from "../utils/datagrapper";
import QuestionCard from "@/components/QuestionCard";
import { fetchedQuestions } from "../../../types";

const questionsPage = () => {
  let { questions, options }: fetchedQuestions = use(datafetching());
  return (
    <>
      <QuestionCard questions={questions} options={options} />
    </>
  );
};

export default questionsPage;
