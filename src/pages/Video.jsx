import React, { useRef, useState } from "react";
import "./video.css";
import video1 from "./videos/video1.mp4";
import VideoFooter from "./components/footer/videoFooter";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={video1}
      ></video>
      {/* side bar */}
      <VideoFooter/>
    </div>
  );
}

export default Video;
