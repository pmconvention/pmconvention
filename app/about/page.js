'use client';

import { motion } from 'framer-motion';
import { Quicksand } from 'next/font/google';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="py-16 px-5 md:px-20 space-y-12">
      {/* Heading */}
      <motion.h1
        className={`text-5xl font-bold text-center pt-10 ${quicksand.className}`}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Welcome to PM Convention
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Side - Image */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
        >
          <Image
            src="/Hall1.JPG"
            alt="PM Convention Hall"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="space-y-5"
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        >
          <h2 className="text-3xl font-semibold">Experience Elegance & Grandeur</h2>
          <p className="text-lg text-gray-700">
            At <strong>PM Convention</strong>, we offer a luxurious and spacious venue for all your special occasions. 
            Whether it&apos;s a wedding, corporate event, or a grand celebration, our convention hall provides a perfect setting 
            with world-class amenities.
          </p>
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-lg text-gray-700">
            Our venue is equipped with modern facilities, elegant decor, ample parking space, and a dedicated team to ensure 
            your event is flawless. We take pride in delivering top-notch hospitality to create unforgettable memories.
          </p>
        </motion.div>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {[
          { title: 'Spacious Halls', desc: 'Large capacity with elegant interiors.' },
          { title: 'Water facility', desc: 'Water Facilty for Cooking Needs' },
          { title: 'Ample Parking', desc: 'Convenient & secure parking for guests.' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
