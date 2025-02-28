"use client";

import Image from "next/image";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const images = [
  { src: "/Marriage1.jpeg", alt: "Marriage Image 1" },
  { src: "/Birthday1.jpeg", alt: "Birthday Image 1" },
  { src: "/Marriage2.jpeg", alt: "Marriage Image 2" },
  { src: "/Birthday2.jpeg", alt: "Birthday Image 2" },
  { src: "/Ideal.jpeg", alt: "Ideal Image" },
  { src: "/Birthday3.jpg", alt: "Birthday Image 3" },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="space-y-10 py-10">
      {/* Title */}
      <motion.div
        className={`text-4xl font-bold ${quicksand.className} flex justify-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-[250px] rounded-md shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* More Button */}
      <motion.div
        className={`text-xl font-bold ${quicksand.className} flex justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/gallery" className="bg-green-600 text-white p-3 rounded-md shadow-md">
          More
        </Link>
      </motion.div>
    </div>
  );
};

export default Gallery;
