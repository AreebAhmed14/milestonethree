import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className='w-full h-[450px] inset-0 bg-[url("/static/shop.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
    <div className='absolute w-full h-[450px] backdrop-blur-[3px] z-10'></div>

        <span className='w-[77px] h-[77px] z-20'>
            <Image src={'/static/logo.png'} alt="" width={77} height={77} />
        </span>
        <p className='text-[48px] font-[500] z-20'>Contact</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
            <span className='text-black font-[600]'>Home</span>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Contact</span>
        </div>
    </div>

    <div className='w-full flex justify-center items-center flex-col '>
        <p className='text-[36px] font-[700] mt-10 max-[410px]:text-[28px]'>Get In Touch With Us</p>
        <center><p className='text-[#9F9F9F] w-[645px] max-[700px]:w-auto max-[700px]:text-[14px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></center>

        <div className='w-[1058px] h-[923px] mt-10 flex justify-center overflow-hidden max-[1060px]:w-[850px] max-[850px]:w-[700px] max-[700px]:flex-col max-[700px]:h-auto max-[700px]:items-center max-[700px]:w-auto'>
            <div className='w-[393px] h-[537px] flex flex-col justify-center max-[700px]:w-[auto]'>
                <div className='flex flex-col items-center'>
                    <p className='font-[500] text-[24px] mt-4'>Address</p>
                    <p className='w-[172px]'>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-[500] text-[24px] mt-4'>Phone</p>
                    <p className='w-[172px]'>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-[500] text-[24px] mt-4'>Working Time</p>
                    <p className='w-[172px]'>Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00</p>
                </div>
            </div>

            <div className='w-[635px] h-[923px] items-start ml-[4rem] mt-[4rem] pl-[5rem] flex flex-col max-[850px]:w-auto max-[850px]:pl-0 max-[700px]:ml-0 max-[700px]:h-auto'>
            <label className='text-[16px] font-[500] mt-5'>Your Name</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[850px]:w-[300px] max-[850px]:h-[60px]'/>

                <label className='text-[16px] font-[500] mt-5'>Email Address</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[850px]:w-[300px] max-[850px]:h-[60px]'/>

                <label className='text-[16px] font-[500] mt-5'>{`Subject`}</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[850px]:w-[300px] max-[850px]:h-[60px]'/>

                <label className='text-[16px] font-[500] mt-5'>Message</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[850px]:w-[300px] max-[850px]:h-[60px]'/>

                <button className='px-8 py-2 rounded-full mt-[3rem] border-[1px] border-black '>Submit</button>
            </div>
        </div>
    </div>

    <div className='w-full h-[300px] flex justify-between items-center mt-10 bg-[#FAF4F4] max-[730px]:h-auto max-[730px]:flex-col'>
            <div className='w-[375px] h-[108px] flex flex-col max-[1058px]:w-[300px] max-[730px]:h-auto max-[730px]:text-center max-[730px]:py-5'>
                <h1 className={`text-[36px] font-[700] mt-5 max-[1818px]:text-[30px]`}>Free Delivery</h1>
                <h1 className={`text-[20px] font-[500] mt-5 max-[818px]:text-[16px] px-2`}>For all oders over $50, consectetur adipim scing elit.</h1>
            </div>
            <div className='w-[375px] h-[108px] flex flex-col max-[1058px]:w-[300px] max-[730px]:h-auto max-[730px]:text-center max-[730px]:py-5'>
                <h1 className={`text-[36px] font-[700] mt-5 max-[1818px]:text-[30px]`}>90 Days Return</h1>
                <h1 className={`text-[20px] font-[500] mt-5 max-[818px]:text-[16px] px-2`}>If goods have problems, consectetur adipim scing elit.</h1>
            </div>
            <div className='w-[375px] h-[108px] flex flex-col max-[1058px]:w-[300px] max-[730px]:h-auto max-[730px]:text-center max-[730px]:py-5'>
                <h1 className={`text-[36px] font-[700] mt-5 max-[1818px]:text-[30px]`}>Secure Payment</h1>
                <h1 className={`text-[20px] font-[500] mt-5 max-[818px]:text-[16px] px-2`}>100% secure payment, consectetur adipim scing elit.   </h1>
            </div>
        </div>
    </>
  )
}

export default page
