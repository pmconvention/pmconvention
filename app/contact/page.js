'use client';

import { motion } from 'framer-motion';
import { Quicksand } from 'next/font/google';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import emailjs from 'emailjs-com';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="py-16 px-5 md:px-20 space-y-12">
    

      {/* Contact Us Section */}
      <motion.div className="py-10 px-5 md:px-20   my-10">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <ContactForm />
      </motion.div>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error messages

    // Check for empty fields
    if (!formData.name  || !formData.phone || !formData.message) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_jamjdk4", // Replace with your EmailJS service ID
        "template_8bxb6a1", // Replace with your EmailJS template ID
        form.current,
        "23FkUNr0xFaoTvdVE" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSent(true); // Show success message
          setFormData({ name: "", phone: "", message: "" }); // Reset form
          setError(""); // Clear any error messages
        },
        (error) => {
          console.log("Email send error:", error.text);
          setError("Something went wrong! Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };


  return (
    <form ref={form} className="space-y-5 max-w-lg mx-auto pt-10" onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
      ></textarea>
      
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        {isSent ? 'Message Sent!' : 'Send Message'}
      </button>
    </form>
  );
};

export default About;
