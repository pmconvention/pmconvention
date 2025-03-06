import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";



const Banner = () => {
  return (
    <div className='h-10 w-screen bg-blue-800 flex justify-end lg:px-20 px-10 items-center z-50 fixed top-0 text-white'>
        <div className='flex items-center gap-10 font-bold'>
            <p className='flex  items-center gap-2'><FaPhoneAlt /> +91 9490188701, +91 9492838341 </p>
            <p className='flex  items-center gap-2'><IoLocationSharp /> <Link  href="https://www.google.com/maps/dir//PM+Gardens+and+Convention+Hall,+Sitarampur,+Telangana+505001/@18.4625387,79.1193504,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bccd9a3f072bf73:0xf6b55bd57c46a9db!2m2!1d79.1219241!2d18.4624921?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank">Location</Link></p>
        </div>
    </div>
  )
}

export default Banner