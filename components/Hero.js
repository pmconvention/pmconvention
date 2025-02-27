"use client";

import Image from "next/image";
import React from "react";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-screen lg:h-[90vh] md:h-[70vh] h-[60vh] top-[80px] pb-20"
    >
      {/* Top Decorative Image */}
      <div className="absolute top-0 left-0 w-full h-10 bg-[url('/top.png')] z-40 bg-repeat-x"></div>

      {/* Hero Image with Background Overlay */}
      <div className="relative w-full h-full">
        <Image
          src="/Hero.JPG"
          alt="No Image Found"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Background color overlay on the image */}
        <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
      </div>

      {/* Hero Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center space-y-4 ${quicksand.className}`}
      >
        <h1 className="text-5xl font-bold">Welcome to PM Convention</h1>
        <p className="text-xl font-bold">Elegant Spaces for Memorable Events</p>
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black border border-white p-2 shadow-md rounded-md transition-transform duration-300 font-bold"
        >
          <Link href="/contact">Book Now</Link>
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Image */}
      <div className="absolute bottom-14 left-0 w-full h-10 bg-[url('/bottom.png')] bg-repeat-x"></div>
    </motion.div>
  );
};

export default Hero;
