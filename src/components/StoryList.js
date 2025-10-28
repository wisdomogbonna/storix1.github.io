import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StoryList.css";

const API_URL = "https://storixbackend.onrender.com";

export default function StoryList() {
  const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/stories`)
              .then((res) => setStories(res.data))
                    .catch(() => console.log("Error fetching stories"));
                      }, []);

                        return (
                            <div className="story-page">
                                  <h2>📚 All Stories</h2>
                                        <div className="story-grid">
                                                {stories.length > 0 ? (
                                                          stories.map((story) => (
                                                                      <div key={story._id} className="story-card">
                                                                                    <h3>{story.title}</h3>
                                                                                                  <p>{story.description}</p>
                                                                                                                {story.price && <p className="price">💎 Premium: ₦{story.price}</p>}
                                                                                                                            </div>
                                                                                                                                      ))
                                                                                                                                              ) : (
                                                                                                                                                        <p>No stories available yet.</p>
                                                                                                                                                                )}
                                                                                                                                                                      </div>
                                                                                                                                                                          </div>
                                                                                                                                                                            );
                                                                                                                                                                            }