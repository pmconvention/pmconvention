import Image from 'next/image'
import React from 'react'
import { Quicksand } from "next/font/google";
import Link from 'next/link';


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const Gallery = () => {
  return (
    <div className='space-y-10 py-10'>
        <div  className={`text-4xl font-bold ${quicksand.className} flex justify-center`}>Gallery</div>
    <div className='grid grid-cols-3 gap-10 w-[100%] px-10'>
        <div className='w-[100%] h-[250px]'>
            <Image src='/Marriage1.jpeg' alt='no image found' width={500} height={500} className='h-[100%] w-[100%] rounded-md shadow-lg' />
        </div>
        <div className='w-[100%] h-[250px]'>
            <Image src='/Birthday1.jpeg' alt='no image found' width={500} height={500} className='h-[100%] w-[100%] rounded-md shadow-lg' />
        </div>
        <div className='w-[100%] h-[250px]'>
            <Image src='/Marriage2.jpeg' alt='no image found' width={500} height={500} className='h-[100%] w-[100%] rounded-md shadow-lg' />
        </div>
        <div className='w-[100%] h-[250px]'>
            <Image src='/Birthday2.jpeg' alt='no image found' width={500} height={500} className='h-[100%] w-[100%] rounded-md shadow-lg' />
        </div>
        <div className='w-[100%] h-[250px]'>
            <Image src='/Ideal.jpeg' alt='no image found' width={500} height={500} className='h-[100%] w-[100%] rounded-md shadow-lg' />
        </div>
        <div className='w-[100%] h-[250px]'>
            <Image src='/Birthday3.jpg' alt='no image found' width={500} height={500} className='h-[100%] w-[100%] rounded-md shadow-lg' />
        </div>
    </div>
    <div  className={`text-xl font-bold ${quicksand.className} flex justify-center`}><Link href='/gallery' className='bg-black text-white p-2 rounded-md shadow-md'>More</Link></div>
    </div>
  )
}

export default Gallery