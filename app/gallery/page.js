"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  return (
    <div className="p-5 min-h-screen">
      <h2 className={`flex text-3xl font-bold mb-4 pt-20 justify-center py-10 ${quicksand.className}`}>Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.url}
              alt={`Gallery Image ${index}`}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg shadow-md"
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
    </div>
  );
};

export default Gallery;
