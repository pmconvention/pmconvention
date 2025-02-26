"use client";
import React, { useState, useEffect } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const weddingImages = ["/Marriage1.jpeg", "/Marriage2.jpeg", "/ideal.jpeg"];
const birthdayImages = ["/Birthday1.jpeg", "/Birthday2.jpeg", "/Birthday3.jpg"];

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Eminents = () => {
  const [currentWeddingImage, setCurrentWeddingImage] = useState(0);
  const [currentBirthdayImage, setCurrentBirthdayImage] = useState(0);

  useEffect(() => {
    const weddingInterval = setInterval(() => {
      setCurrentWeddingImage((prev) => (prev + 1) % weddingImages.length);
    }, 10000);

    const birthdayInterval = setInterval(() => {
      setCurrentBirthdayImage((prev) => (prev + 1) % birthdayImages.length);
    }, 10000);

    return () => {
      clearInterval(weddingInterval);
      clearInterval(birthdayInterval);
    };
  }, []);

  return (
    <div className="w-screen h-auto min-h-screen md:min-h-[80vh] pt-10 space-y-10">
      <div
        className={`text-4xl font-bold ${quicksand.className} flex justify-center`}
      >
        Our Services
      </div>
      <div>
        {/* Wedding Section */}
        <div className="lg:flex  w-screen gap-6 px-10 lg:pb-0 pb-10">
          <motion.div
            className="lg:w-[50%] lg:h-[500px] md:h-[400px] h-[300px] relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src={weddingImages[currentWeddingImage]}
              alt="Wedding Event"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg w-full shadow-md lg:h-[80%] h-[100%]"
            />
          </motion.div>

          <motion.div
            className="lg:w-[50%] space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div
              className={`text-2xl font-semibold ${quicksand.className} flex justify-center font-bold`}
            >
              Wedding & Post Wedding Parties
            </div>
            <ul className="space-y-2">
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Luxury at Its Finest
                </span>{" "}
                – Indulge in premium amenities that elevate your celebration with a touch of sophistication.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Exceptional Hospitality
                </span>{" "}
                – Our dedicated team ensures a seamless and delightful experience for you and your guests.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Adaptable Event Spaces
                </span>{" "}
                – A beautifully designed venue that caters to events of all sizes and styles.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Affordable Elegance
                </span>{" "}
                – Discover budget-friendly packages tailored to bring your dream wedding to life.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Prime Accessibility
                </span>{" "}
                – Located in the heart of Karimnagar, our venue is easy to find and reach.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Unforgettable Celebrations
                </span>{" "}
                – Renowned for its stunning ambiance and top-tier services, our venue promises memories that last a lifetime.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Birthday Section */}
        <div className="lg:flex lg:flex-row-reverse  w-screen gap-6 px-10">
          <motion.div
            className="lg:w-[50%] lg:h-[500px] md:h-[400px] h-[300px] relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src={birthdayImages[currentBirthdayImage]}
              alt="Birthday Event"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg w-full shadow-md lg:h-[80%] h-[100%]"
            />
          </motion.div>

          <motion.div
            className="lg:w-[50%] space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div
              className={`text-2xl font-semibold ${quicksand.className} flex justify-center font-bold`}
            >
              The Ultimate Birthday Party Hall
            </div>
            <ul className="space-y-2">
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Fun Meets Elegance
                </span>{" "}
                – Host an unforgettable birthday celebration in a beautifully designed space that blends style and joy.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Seamless Hospitality
                </span>{" "}
                – Our dedicated team takes care of every detail, ensuring a stress-free and enjoyable experience.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Versatile Party Spaces
                </span>{" "}
                – Whether it’s an intimate gathering or a grand celebration, our venue adapts to your needs.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Budget-Friendly Packages
                </span>{" "}
                – Enjoy a spectacular birthday without breaking the bank, with customizable options to suit every budget.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Memorable Moments
                </span>{" "}
                – From vibrant decor to exciting entertainment, our venue guarantees a birthday celebration to remember.
              </li>
              <li>
                <span className={`${quicksand.className} font-bold text-[18px]`}>
                  Unforgettable Celebrations
                </span>{" "}
                – Renowned for its stunning ambiance and top-tier services, our venue promises memories that last a lifetime.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eminents;
