import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Catagories = () => {
  return (
    <>
    <h1 className='text-white text-[2rem] border-t-[5px] py-5 max-[840px]:text-[1.5rem] font-[600] text-center my-7'>SHOP BY CATEGORIES</h1>
      <div className='flex w-full h-[auto] justify-around items-center max-[965px]:flex-col'>
      <div className='flex justify-around w-[50%] items-center max-[965px]:w-full max-[480px]:flex-col'>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/shirts.webp"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>SHIRTS & T-SHIRTS</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'><Link href={"/Shirts"}> SHOP NOW</Link></div>
            </div>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/p2.webp"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>DRESS PANTS</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
        </div>
       



        <div className='flex justify-around w-[50%] items-center max-[965px]:w-full max-[480px]:flex-col'>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/b2.jpg"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>BLAZERS</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/office.avif"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>OFFICE SHOSE</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
        </div>
      </div>
















      <div className='flex w-full h-[auto] justify-around items-center max-[965px]:flex-col'>
        <div className='flex justify-around w-[50%] items-center max-[965px]:w-full max-[480px]:flex-col'>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/perfume.avif"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>PERFUMES</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/watch.avif"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>WATCHES</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
        </div>



        <div className='flex justify-around w-[50%] items-center max-[965px]:w-full max-[480px]:flex-col'>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/g4.png"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>GLASSES</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
            <div className='w-[20rem] bg-zinc-950 cursor-pointer group h-[15rem] flex overflow-hidden flex-col relative justify-around items-center max-[1285px]:w-[15rem] my-[2rem] max-[480px]:my-[1rem] rounded-md shadow-inner shadow-zinc-900'>
                <div className='w-[12rem] h-[9rem] '>
                    <Image src={"/static/slef.webp"} alt='' width={150} height={150} className='w-full h-full'/>
                </div>
                <p className='text-[1.5rem] font-[600] text-white font-sans '>SELF CARE</p>
                <div className='w-full h-[4rem] absolute bg-black mt-[12rem] translate-y-20 group-hover:translate-y-0 transition-all flex justify-center items-center text-[1.5rem] font-[600] text-white'>SHOP NOW</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Catagories
