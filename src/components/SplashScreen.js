import React from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

export default function SplashScreen() {
  const navigate = useNavigate();

    return (
        <div className="splash-container">
              <h1 className="logo">Storix</h1>
                    <p className="tagline">Where stories come alive ✨</p>

                          <div className="buttons">
                                  <button className="btn primary" onClick={() => navigate("/login")}>
                                            Log In
                                                    </button>
                                                            <button className="btn secondary" onClick={() => navigate("/register")}>
                                                                      Create Account
                                                                              </button>
                                                                                    </div>
                                                                                        </div>
                                                                                          );
                                                                                          }