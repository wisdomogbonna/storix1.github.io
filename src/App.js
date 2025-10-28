import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import StoryList from "./components/StoryList";
import OwnerDashboard from "./components/OwnerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));

    return (
        <Router>
              <Routes>
                      {/* 🌟 Splash / Home */}
                              <Route path="/" element={<SplashScreen />} />

                                      {/* 🔐 Auth Routes */}
                                              <Route
                                                        path="/login"
                                                                  element={<Login onLogin={() => setIsAuthenticated(true)} />}
                                                                          />
                                                                                  <Route path="/register" element={<Register />} />

                                                                                          {/* 👥 Normal Users */}
                                                                                                  <Route
                                                                                                            path="/stories"
                                                                                                                      element={
                                                                                                                                  <ProtectedRoute>
                                                                                                                                                <StoryList />
                                                                                                                                                            </ProtectedRoute>
                                                                                                                                                                      }
                                                                                                                                                                              />

                                                                                                                                                                                      {/* 🧑‍💼 Owner Dashboard */}
                                                                                                                                                                                              <Route
                                                                                                                                                                                                        path="/owner/dashboard"
                                                                                                                                                                                                                  element={
                                                                                                                                                                                                                              <ProtectedRoute ownerOnly>
                                                                                                                                                                                                                                            <OwnerDashboard />
                                                                                                                                                                                                                                                        </ProtectedRoute>
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                          />

                                                                                                                                                                                                                                                                                  {/* ❌ Unknown routes */}
                                                                                                                                                                                                                                                                                          <Route path="*" element={<Navigate to="/" replace />} />
                                                                                                                                                                                                                                                                                                </Routes>
                                                                                                                                                                                                                                                                                                    </Router>
                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                      export default App;