import React from 'react'
import { FaInstagram, FaFacebookF} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Quicksand } from "next/font/google";


const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'], // Choose the desired font weights
  });


const Footer = () => {
  return (
    <div className='lg:flex justify-between lg:px-20 md:px-10 py-4 lg:space-y-0 md:space-y-0 space-y-10'>
        <div className='space-y-1'> 
            <div className={`${quicksand.className} font-bold flex justify-center`}>FOLLOW US ON :</div>
            <div>
                <ul className='flex justify-center items-center '>
                    <li><FaInstagram size={40} className='text-pink-500' /></li>
                    <li><FaFacebookF size={32} className='text-blue-500' /></li>
                    <li><AiOutlineYoutube size={40} className='text-red-600' /></li>
                </ul>
            </div>
        </div>
        <div className='space-y-1'>
            <div className={`${quicksand.className} font-bold flex justify-center lg:justify-start md:justify-start`}>ADDRESS :</div>
            <div className='flex justify-center'>
                <ul>
                    <li>PM Gardens & Convention Hall </li>
                    <li>Seetharampur, Karimnagar</li>
                    <li>Telangana, 505001</li>
                </ul>
            </div>
        </div>
        <div className='space-y-1'>
            <div className={`${quicksand.className} font-bold flex justify-center`}>CONTACT US :</div>
            <div className='flex justify-center'>
            <ul>
                <li>+91 9490188701</li>
                <li>+91 9492838341</li>
                <li>+91 7674059286</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer