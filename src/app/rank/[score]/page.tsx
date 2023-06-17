"use client";
import { sendingScores } from "../../utils/sendingscore";
import greetingSVG from "../../../../public/celebration.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const RankPage = () => {
  // contain the score and will be passed to the function will get the score out of it and call the api
  const path = usePathname();
  const [userRank, setUserRank] = useState([]);
  useEffect(() => {
    //async function awaiting for result of the other async function that calling the api
    const fetchingData = async () => {
      const fetchedRank = await sendingScores(path);
      setUserRank(fetchedRank);
    };
    fetchingData();
  }, []);
  return (
    <div className="w-full h-full flex flex-col space-y-20 items-center ">
      <h2 className="text-2xl text-white font-bold">Ranking</h2>
      <h6 className="font-3xl font-semibold text-[#f7ab0a]">
        You're one the top{" "}
        <span className="text-4xl text-[#f8b323] underline ">{userRank}%</span>
      </h6>
      <Link href="/questions">
        <button className="button px-20">take the quiz again</button>
      </Link>
      <Image src={greetingSVG} className="w-[200px] h-[200px]" alt="svg" />
    </div>
  );
};

export default RankPage;
