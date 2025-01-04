import React from 'react'
import { client } from "@/sanity/lib/client"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';



const page = async ({params}:any) => {
    const datas = await client.fetch('*[_type=="shirt"]')
    const refine = datas[params.shirt-1]
      
  return (
    <>

      <div className='w-full h-[602px] border-b-[2px] border-[#9F9F9F] flex justify-center max-[850px]:flex-col max-[850px]:h-auto max-[850px]:items-center'>
        <div className='w-[480px] h-[500px] bg-[#FFF9E5] mt-[3rem] max-[1136px]:w-[400px] max-[1136px]:h-[500px] max-[990px]:w-[300px] max-[850px]:h-auto max-[850px]:w-[600px] max-[600px]:w-[500px] max-[512px]:w-[400px] max-[420px]:w-[300px] max-[337px]:w-[300px] rounded-lg overflow-hidden shadow-inner shadow-gray-200'>
        <Image src={urlFor(refine.image).width(500).url()} alt='' width={950} height={950} className='w-full h-full'/>
        </div>
        <div className='w-[606px] h-[530px] ml-[3rem] mt-[5rem] flex flex-col justify-start max-[1136px]:w-[550px]  max-[990px]:w-[500px] max-[850px]:ml-0 max-[512px]:w-[400px] max-[420px]:w-[300px] max-[337px]:w-[280px] max-[550px]:mt-[2rem] max-[850px]:h-auto'>
            <p className='text-[42px] mt-3 font-[500] max-[420px]:text-[35px] text-gray-200'>{refine.title}</p>
            <p className='text-[24px] mt-3 text-[#9F9F9F] font-[500]'>Price: {refine.price} pkr</p>
            <p className='text-[17px] mt-3 font-[500] text-white'>{refine.description}</p>
            <p className='text-[16px] mt-3 text-[#9F9F9F] font-[500]'>Rating: </p>
            <div className='text-[20px] text-yellow-500 font-[600]'>
              {refine.rating}
            </div>
            <div className='w-full h-[65px]  mt-10 flex justify-start items-center max-[450px]:mt-5 max-[450px]:my-10'>
                               <Link href={"/Cart"}><button className='w-[200px] h-[60px] font-[600] bg-white hover:scale-105 cursor-pointer text-[18px] border-[1px] text-black rounded-md flex justify-center items-center max-[420px]:w-[100px] max-[420px]:text-[16px] max-[420px]:h-[50px]'>Add to Cart</button></Link>
            </div>

        </div>

      </div>
        <div className='w-full flex justify-center flex-col items-center mt-[2rem]'>
            <p className='text-[24px] font-[600] text-white'>Description</p>
            <center>
            <p className='text-[#9F9F9F] mt-5 p-4 text-[16px]'>{refine.explaination}</p></center>
        </div>
     </>
  )
}

export default page
