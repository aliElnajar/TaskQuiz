import Image from "next/image";
import loadingSVG from "../../../public/loading.svg";
const Loading = () => {
  return (
    <div className="flex items-center flex-col space-y-10">
      <h2 className="text-2xl text-white">Loading...</h2>
      <Image
        src={loadingSVG}
        alt="loading pic"
        className="w-[200px] h-[200px] mx-auto"
      />
    </div>
  );
};

export default Loading;
