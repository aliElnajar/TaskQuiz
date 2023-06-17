import Link from "next/link";
import welcomeSvg from "../../public/welcoming.svg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col  max-h-screen justify-between     items-center mt-20">
      <h1 className="text-2xl text-white uppercase">
        Welcome to english quiz app
      </h1>
      <Link href="/questions">
        <button className="btn btn-accent mt-20">let's go</button>
      </Link>
      <Image src={welcomeSvg} alt="svg" className="w-[200px] h-[200px]" />
    </main>
  );
}
