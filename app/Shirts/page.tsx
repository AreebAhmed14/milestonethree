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
            <div className='w-[80%] h-[7rem] mt-3 rounded-md'>
                <Image src={urlFor(items.image).width(500).url()} alt='' width={950} height={950} className='w-full h-full'/>
            </div>
            <div className='flex flex-col w-[80%] my-2'>
                <h1 className='font-[600]'>{items.title}</h1>
                <p>Price: <span className='text-gray-500 font-[600]'>{items.price} pkr</span> </p>
                <p >Rating: <span className='text-yellow-400 font-[600]'>{items.rating}</span></p>
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
