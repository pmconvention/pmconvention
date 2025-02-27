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

  const correctEmail = "pmconvention1@gmail.com"; // Hardcoded email
  const correctPassword = "Bhulaxmi@1965"; // Hardcoded password

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
    <div className="min-h-screen flex items-center justify-center">
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="p-5 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Login
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Upload Images</h2>
          <div className="p-5 pt-40">
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 mt-2">
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {imageUrl && <Image src={imageUrl} alt="Uploaded Image" width={128} height={128} className="mt-4" />}
    </div>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2">
            Logout
          </button>
          {/* Image Upload Form */}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
