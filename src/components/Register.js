import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const API_URL = "https://storixbackend.onrender.com";

export default function Register() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
        const [loading, setLoading] = useState(false);

          const handleSubmit = async (e) => {
              e.preventDefault();
                  setLoading(true);

                      try {
                            await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
                                  alert("✅ Registration successful!");
                                        window.location.href = "/login";
                                            } catch (err) {
                                                  console.error(err);
                                                        alert("❌ Registration failed. Try again.");
                                                            } finally {
                                                                  setLoading(false);
                                                                      }
                                                                        };

                                                                          return (
                                                                              <div className="auth-container">
                                                                                    <h1>Join Storix</h1>
                                                                                          <form onSubmit={handleSubmit} className="auth-box">
                                                                                                  <input
                                                                                                            type="text"
                                                                                                                      placeholder="Full name"
                                                                                                                                value={name}
                                                                                                                                          onChange={(e) => setName(e.target.value)}
                                                                                                                                                    required
                                                                                                                                                            />
                                                                                                                                                                    <input
                                                                                                                                                                              type="email"
                                                                                                                                                                                        placeholder="Email address"
                                                                                                                                                                                                  value={email}
                                                                                                                                                                                                            onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                      required
                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                      <input
                                                                                                                                                                                                                                                type="password"
                                                                                                                                                                                                                                                          placeholder="Create password"
                                                                                                                                                                                                                                                                    value={password}
                                                                                                                                                                                                                                                                              onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                        required
                                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                                        <button type="submit" className="btn primary" disabled={loading}>
                                                                                                                                                                                                                                                                                                                  {loading ? "Creating..." : "Sign Up"}
                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                </form>
                                                                                                                                                                                                                                                                                                                                      <a href="/login" className="link">Already have an account?</a>
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                            }