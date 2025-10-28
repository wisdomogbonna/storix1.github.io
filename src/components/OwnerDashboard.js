import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OwnerDashboard.css";

const API_URL = "https://storixbackend.onrender.com";

export default function OwnerDashboard() {
  const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
      const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
          const [price, setPrice] = useState("");
            const [file, setFile] = useState(null);

              const handleLogin = () => {
                  if (password === "Storix/Wiz.2025") {
                        setLoggedIn(true);
                            } else {
                                  alert("Invalid owner password!");
                                      }
                                        };

                                          const handleUpload = async (e) => {
                                              e.preventDefault();
                                                  const formData = new FormData();
                                                      formData.append("title", title);
                                                          formData.append("description", description);
                                                              formData.append("price", price);
                                                                  if (file) formData.append("file", file);

                                                                      try {
                                                                            await axios.post(`${API_URL}/api/stories`, formData, {
                                                                                    headers: { "Content-Type": "multipart/form-data" },
                                                                                          });
                                                                                                alert("✅ Story/Ad posted successfully!");
                                                                                                      setTitle("");
                                                                                                            setDescription("");
                                                                                                                  setPrice("");
                                                                                                                        setFile(null);
                                                                                                                            } catch (err) {
                                                                                                                                  alert("❌ Upload failed.");
                                                                                                                                      }
                                                                                                                                        };

                                                                                                                                          if (!loggedIn) {
                                                                                                                                              return (
                                                                                                                                                    <div className="auth-container">
                                                                                                                                                            <h2>Owner Login</h2>
                                                                                                                                                                    <input
                                                                                                                                                                              type="password"
                                                                                                                                                                                        placeholder="Enter owner password"
                                                                                                                                                                                                  value={password}
                                                                                                                                                                                                            onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                    />
                                                                                                                                                                                                                            <button className="btn primary" onClick={handleLogin}>Login</button>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                          return (
                                                                                                                                                                                                                                              <div className="dashboard">
                                                                                                                                                                                                                                                    <h2>📊 Owner Dashboard</h2>
                                                                                                                                                                                                                                                          <form onSubmit={handleUpload} className="upload-box">
                                                                                                                                                                                                                                                                  <input
                                                                                                                                                                                                                                                                            type="text"
                                                                                                                                                                                                                                                                                      placeholder="Story Title"
                                                                                                                                                                                                                                                                                                value={title}
                                                                                                                                                                                                                                                                                                          onChange={(e) => setTitle(e.target.value)}
                                                                                                                                                                                                                                                                                                                    required
                                                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                                                    <textarea
                                                                                                                                                                                                                                                                                                                                              placeholder="Description"
                                                                                                                                                                                                                                                                                                                                                        value={description}
                                                                                                                                                                                                                                                                                                                                                                  onChange={(e) => setDescription(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                            required
                                                                                                                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                                                                                                                            <input
                                                                                                                                                                                                                                                                                                                                                                                                      type="number"
                                                                                                                                                                                                                                                                                                                                                                                                                placeholder="Price (optional)"
                                                                                                                                                                                                                                                                                                                                                                                                                          value={price}
                                                                                                                                                                                                                                                                                                                                                                                                                                    onChange={(e) => setPrice(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                            <button type="submit" className="btn primary">Upload Story</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </form>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }