
import Link from "next/link";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Sale2 from "./components/Sale2";
import Sale3 from "./components/Sale3";
// import Catagories from "./components/catagories";

export default function Home() {
  return (
    <>
      <Hero />
      <Sale2 />
      <Sale />
      <Sale3 />

    <div className="w-full flex justify-center">
      <Link href={"/Shirts"}><button className='text-[1.8rem] max-[480px]:w-[8rem] max-[840px]:h-[3rem] rounded-2xl w-[12rem] h-[4rem] mb-5 flex justify-center items-center bg-white font-[700] text-black leading-[70px] max-[1200px]:text-[1.5rem] max-[480px]:leading-[45px] max-[480px]:text-[1rem] font-sans hover:scale-95 transition-all duration-[0.5s]'>VIEW ALL</button></Link>
      
    </div>
    </>
  );
}
