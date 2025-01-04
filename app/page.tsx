"use client"
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Catagories from "./components/catagories";

export default function Home() {
    const handleClick = () => {
        alert('sir Ameen Assalamoalikum, Sir i almost complete this project just shortage of time i cant add products correctly and add functionality of add to cart i make rout and dynamic rout only for shirt and t shirt now but soon i will integrate raouts all categories and add products correctly..thank you');
      };
 return(
  <>
  <button onClick={handleClick} className="bg-white p-2 ml-5 rounded-full font-[700]">Dear Sir Ameen Alam Please click here</button>
  <Hero/>
  <Catagories />
  <Sale />
  </>
 )
}

