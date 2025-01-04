import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ["400","700"]
});
const Sale = () => {
  return (
    <>
      <div className='w-full h-[25rem] bg-zinc-950 my-[5rem] flex justify-between items-center max-[865px]:flex-col-reverse max-[865px]:h-auto'>
        <div className={`flex flex-col ml-[5rem] max-[865px]:text-center ${caveat.className} relative z-20 max-[950px]:ml-[3rem] max-[840px]:my-10 max-[840px]:ml-0 max-[480px]:my-5`}>
        <h1 className='text-[3rem] font-[700] text-white leading-[70px] max-[1200px]:text-[2rem] max-[480px]:leading-[45px] max-[480px]:text-[1.5rem]'>FLASH SALE ON WATCHES</h1>
        <p className='text-[3rem] font-[700] text-white leading-[70px] max-[1200px]:text-[2rem] max-[480px]:leading-[45px] max-[480px]:text-[1.5rem]'>UP TO 50% OFF </p>
        <button className='text-[1.8rem] max-[865px]:ml-16 max-[480px]:ml-14 max-[480px]:w-[8rem] max-[840px]:h-[3rem] rounded-2xl w-[12rem] h-[4rem] my-5 flex justify-center items-center bg-white font-[700] text-black leading-[70px] max-[1200px]:text-[1.5rem] max-[480px]:leading-[45px] max-[480px]:text-[1rem] font-sans hover:scale-95 transition-all duration-[0.5s] animate-[bounce_1s_infinite]'>SHOP NOW</button>
        </div>
        {/* <div className='w-[10rem] h-[7rem] ml-[10rem] rounded-full absolute z-10 blur-[100px] bg-white max-[1200px]:w-[5rem] max-[1200px]:h-[5rem] max-[950px]:ml-[7rem] max-[465px]:ml-[0rem] max-[840px]:hidden'></div> */}
        <div className='w-[30rem] rounded-2xl mr-[5rem] h-[auto] animate-[pulse_1.5s_infinite] overflow-hidden max-[1200px]:w-[30rem] max-[950px]:mr-[1rem] max-[840px]:mr-0 max-[480px]:w-[25rem] max-[400px]:w-[20rem] max-[320px]:w-[18rem]'>
            <Image src={"/static/watch.avif"} alt='' width={950} height={950} className='w-full h-full my-10 rounded-full'/>
        </div>
      </div>
    </>
  )
}

export default Sale
