import React from 'react'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link'
import Image from 'next/image';


const page = async () => {
    const data = await client.fetch('*[_type=="shirt"]')
        // console.log(data[0])
      return (
    <>
    <div className='grid grid-cols-6 justify-items-center max-[924px]:grid-cols-5 max-[768px]:grid-cols-4 max-[619px]:grid-cols-3 max-[477px]:grid-cols-2'>

    {data.map((items:any , values:any)=>(
      <div key={values}>
        <Link href={`/Shirts/${items.id}`}><div className='w-[200px] overflow-hidden h-[230px] my-4 bg-zinc-950 text-white rounded-lg flex items-center flex-col max-[1244px]:w-[190px] max-[1162px]:w-[150px]'>
            <div className='w-[80%] h-[7rem] mt-3 rounded-lg overflow-hidden'>
                <Image src={urlFor(items.image).width(500).url()} alt='' width={950} height={950} className='w-full h-full'/>
            </div>
            <div className='flex flex-col w-[80%] my-2'>
                <h1 className='font-[600] text-[0.8rem]'>{items.title}</h1>
                <p className='text-[0.8rem] mt-1'>Price: <span className='text-gray-500 font-[600] text-[0.8rem]'>{items.price} pkr</span> </p>
                <p className='text-[0.8rem] mt-1' >Rating: <span className='text-yellow-400 font-[600] text-[0.8rem]'>{items.rating}</span></p>
            </div>
        </div>
        </Link>
        </div>
        ))
    }
    </div>
    </>
  )
}

export default page
