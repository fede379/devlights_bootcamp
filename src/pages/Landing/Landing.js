import { useRef, useState } from "react";
import landingImg from "./logo.png";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  function onClick() {
    navigate("login");
  }

  function onPlayPause() {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <main className="Landing">
      <section className="LandingContainer">
        <img src={landingImg} alt="Landing Hero" />
        <h1>Devlights Bootcamp</h1>
        <h3>ReactJS</h3>
        <div>
          <video width="600" ref={videoRef} onClick={onPlayPause}>
            <source src="/videos/test.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        
        {/* <button onClick={onClick}>Login</button> */}
      </section>
    </main>
  );
}
