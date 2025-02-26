'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X} from 'lucide-react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Choose the desired font weights
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between lg:px-20 px-10 items-center w-screen bg-white z-50 text-black fixed">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/Logo.jpeg"
          alt="No Logo Found"
          width={300}
          height={300}
          className="w-16 h-20"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className={`lg:flex md:hidden hidden space-x-10 font-bold lg:text-[16px]`}>
        {['Home', 'Gallery', 'About', 'Contact'].map((item, index) => (
          <li
            key={index}
            className={`group relative hover:translate-x-[3px] hover:-translate-y-[3px] duration-500 ${quicksand.className} font-bold`}
          >
            <Link href="/">
              <span className="relative z-10">{item}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full mt-1"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:flex lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg z-50 rounded-b-lg transition-transform duration-300">
          <ul className="flex flex-col space-y-5 p-5 font-bold text-center">
            {['Home', 'Gallery', 'About', 'Contact'].map((item, index) => (
              <li key={index} className={`group relative hover:translate-x-[3px] hover:-translate-y-[3px] duration-500  ${quicksand.className}`}>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="relative z-10">{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full mt-1"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
