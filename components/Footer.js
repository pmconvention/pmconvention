import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the desired font weights
});

const Footer = () => {
  return (
    <div className="lg:flex justify-between lg:px-20 md:px-10 py-4 lg:space-y-0 md:space-y-0 space-y-10">
      <div className="space-y-1">
        <div className={`${quicksand.className} font-bold flex justify-center`}>
          FOLLOW US ON :
        </div>
        <div>
          <ul className="flex justify-center items-center space-x-4 ">
            <li>
              <Link
                href="https://www.instagram.com/pmconventionknr/"
                target="_blank"
              >
                <FaInstagram size={40} className="text-pink-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61573735347902"
                target="_blank"
              >
                <FaFacebookF size={32} className="text-blue-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UC5pQp7814kQ2sgB8SrVtYWw"
                target="_blank"
              >
                <AiOutlineYoutube size={40} className="text-red-600" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com/maps/dir//PM+Gardens+and+Convention+Hall,+Sitarampur,+Telangana+505001/@18.4625387,79.1193504,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bccd9a3f072bf73:0xf6b55bd57c46a9db!2m2!1d79.1219241!2d18.4624921?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <MdOutlineLocationOn size={40}  />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-1">
        <div
          className={`${quicksand.className} font-bold flex justify-center lg:justify-start md:justify-start`}
        >
          ADDRESS :
        </div>
        <div className="flex justify-center">
          <ul>
            <li>PM Gardens & Convention Hall </li>
            <li>Seetharampur, Karimnagar</li>
            <li>Telangana, 505001</li>
          </ul>
        </div>
      </div>
      <div className="space-y-1">
        <div className={`${quicksand.className} font-bold flex justify-center`}>
          CONTACT US :
        </div>
        <div className="flex justify-center">
          <ul>
            <li>+91 9490188701</li>
            <li>+91 9492838341</li>
            <li>+91 7674059286</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
