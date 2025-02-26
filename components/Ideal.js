"use client";
import React from "react";
import { Quicksand } from "next/font/google";
import { AirVent, Armchair, Droplets, Car } from "lucide-react";
import { motion } from "framer-motion";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const facilities = [
  { icon: <AirVent size={40} />, label: "Ac Hall" },
  { icon: <Armchair size={40} />, label: "500+ Seating Capacity" },
  { icon: <Droplets size={40} />, label: "Water facility" },
  { icon: <Car size={40} />, label: "Parking facility" },
];

const Ideal = () => {
  return (
    <div className="px-10">
      <div
        className={`text-4xl font-bold ${quicksand.className} flex justify-center`}
      >
        Facilities
      </div>
      <div className="lg:flex md:flex justify-between lg:gap-10 md:gap-2 py-10 lg:space-y-0 md:space-y-0 space-y-2">
        {facilities.map((facility, index) => (
          <motion.div
            key={facility.label}
            className={`md:flex-col flex gap-2 text-[16px] ${quicksand.className} font-bold items-center border w-80 h-40 justify-center rounded-md shadow-md `}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {facility.icon}
            {facility.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ideal;
