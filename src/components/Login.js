import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const API_URL = "https://storixbackend.onrender.com";

export default function Login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
                setLoading(true);

                    try {
                          const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });

                                if (res.data.user) {
                                        localStorage.setItem("user", JSON.stringify(res.data.user));
                                                alert("✅ Login successful!");

                                                        if (res.data.user.role === "owner") {
                                                                  window.location.href = "/owner/dashboard";
                                                                          } else {
                                                                                    window.location.href = "/stories";
                                                                                            }
                                                                                                  } else {
                                                                                                          alert("Invalid login credentials!");
                                                                                                                }
                                                                                                                    } catch (err) {
                                                                                                                          console.error(err);
                                                                                                                                alert("❌ Error logging in. Try again.");
                                                                                                                                    } finally {
                                                                                                                                          setLoading(false);
                                                                                                                                              }
                                                                                                                                                };

                                                                                                                                                  return (
                                                                                                                                                      <div className="auth-container">
                                                                                                                                                            <h1>Storix</h1>
                                                                                                                                                                  <form onSubmit={handleSubmit} className="auth-box">
                                                                                                                                                                          <input
                                                                                                                                                                                    type="email"
                                                                                                                                                                                              placeholder="Email address"
                                                                                                                                                                                                        value={email}
                                                                                                                                                                                                                  onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                            required
                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                            <input
                                                                                                                                                                                                                                                      type="password"
                                                                                                                                                                                                                                                                placeholder="Password"
                                                                                                                                                                                                                                                                          value={password}
                                                                                                                                                                                                                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                              required
                                                                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                                                                              <button type="submit" className="btn primary" disabled={loading}>
                                                                                                                                                                                                                                                                                                                        {loading ? "Logging in..." : "Log In"}
                                                                                                                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                                                                                                                      </form>
                                                                                                                                                                                                                                                                                                                                            <a href="/register" className="link">Create New Account</a>
                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                  }