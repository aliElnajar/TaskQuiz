import { progressbarProps } from "../../types";

const Progressbar = ({ number, useranswer }: progressbarProps) => {
  // that const is making progress bar increase based on number of questions asked
  // when user chose immediately it'll increase not when user click next question
  const progressPercentage = useranswer ? (number + 1) * 10 : number * 10;
  return (
    <div className="flex items-center justify-around">
      <progress
        className="progress bg-white progress-warning  w-[70%]"
        value={progressPercentage}
        max="100"
      />
      <span className="p-1 text-white first-letter:">
        {progressPercentage} %
      </span>
    </div>
  );
};

export default Progressbar;
