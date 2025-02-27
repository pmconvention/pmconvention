"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const correctEmail = "pmconvention1@gmail.com";
  const correctPassword = "Bhulaxmi@1965";

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setUploading(false);

      if (res.ok) {
        setImageUrl(data.url);
        alert("File uploaded successfully!");
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {!isAuthenticated ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full rounded-md mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 w-full rounded-md transition"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Upload Images</h2>
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button
              onClick={handleUpload}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 w-full rounded-md transition"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Uploaded Image"
                width={150}
                height={150}
                className="rounded-lg shadow-md"
              />
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold p-2 w-full mt-4 rounded-md transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
