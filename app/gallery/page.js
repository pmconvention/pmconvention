"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import { IoCloseSharp } from "react-icons/io5";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ITEMS_PER_PAGE = 8; // Change this to control images per page

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");

    const fetchImages = async () => {
      const res = await fetch("/api/list-images");
      const data = await res.json();
      if (data.images) {
        setImages(data.images);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (key) => {
    const res = await fetch("/api/delete-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    const data = await res.json();

    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.key !== key));
    } else {
      alert("Error deleting image: " + data.error);
    }
  };

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]?.url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]?.url);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]?.url);
  };

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const paginatedImages = images.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-5 min-h-screen pt-20">
      <h2 className={`text-3xl font-bold text-center py-10 ${quicksand.className}`}>Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedImages.map((item, index) => (
          <div key={index} className="relative cursor-pointer">
            <Image
              src={item.url}
              alt={`Gallery Image ${index}`}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg shadow-md"
              onClick={() => openImage(index + (currentPage - 1) * ITEMS_PER_PAGE)}
            />
            {isAuthenticated && (
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded"
                onClick={() => handleDelete(item.key)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
        <button
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>

     {/* Image Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
    onClick={closeImage} // Close modal when clicking outside
  >
    <div className="relative p-4" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking on the image */}
      {/* Close Button */}
      <IoCloseSharp
        size={40}
        color="black"
        className="absolute top-4 right-4 text-white bg-white p-1 rounded-full cursor-pointer"
        onClick={closeImage}
      />

      {/* Left Navigation Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-gray-800 p-2 rounded-full"
        onClick={prevImage}
      >
        ◀
      </button>

      {/* Image */}
      <Image src={selectedImage} alt="Large Image" width={800} height={800} className="rounded-lg shadow-lg" />

      {/* Right Navigation Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-gray-800 p-2 rounded-full"
        onClick={nextImage}
      >
        ▶
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Gallery;
