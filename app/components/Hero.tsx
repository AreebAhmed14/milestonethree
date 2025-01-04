import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ["400","700"]
});
const Hero = () => {
  return (
    <>
      <div className='w-full h-[35rem] bg-black flex justify-between items-center max-[840px]:flex-col-reverse max-[840px]:h-auto'>
        <div className={`flex flex-col ml-[5rem] max-[840px]:text-center ${caveat.className} relative z-20 max-[950px]:ml-[3rem] max-[840px]:my-10 max-[840px]:ml-0 max-[480px]:my-5`}>
        <h1 className='text-[3rem] font-[700] text-white leading-[70px] max-[1200px]:text-[2rem] max-[480px]:leading-[45px] max-[480px]:text-[1.5rem]'>WELCOME TO AL-MENII</h1>
        <p className='text-[3rem] font-[700] text-white leading-[70px] max-[1200px]:text-[2rem] max-[480px]:leading-[45px] max-[480px]:text-[1.5rem]'>ENHANCE YOUR LOOK HERE</p>
        <p className='text-[3rem] font-[700] text-white leading-[70px] max-[1200px]:text-[2rem] max-[480px]:leading-[45px] max-[480px]:text-[1.5rem]'>{`BECAUSE ITS MEN'S POINT`}</p>
        </div>
        {/* <div className='w-[10rem] h-[7rem] ml-[10rem] rounded-full absolute z-10 blur-[100px] bg-white max-[1200px]:w-[5rem] max-[1200px]:h-[5rem] max-[950px]:ml-[7rem] max-[465px]:ml-[0rem] max-[840px]:hidden'></div> */}
        <div className='w-[40rem] mr-[3rem] h-[auto] overflow-hidden max-[1200px]:w-[30rem] max-[950px]:mr-[1rem] max-[840px]:mr-0 max-[480px]:w-[25rem] max-[400px]:w-[20rem] max-[320px]:w-[18rem]'>
            <Image src={"/static/pic.jpg!sw800"} alt='' width={950} height={950} className='w-full h-full my-10'/>
        </div>
      </div>
    </>
  )
}

export default Hero
