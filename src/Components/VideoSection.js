import React, { useState } from "react";
import '../style.css';

const VideoSection = ({ videoSrc, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById("video-player");
    videoElement.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    const videoElement = document.getElementById("video-player");
    videoElement.pause();
  };

  return (
    <div className="video-container">
      {!isPlaying && (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="video-thumbnail"
          onClick={handlePlay}
        />
      )}
      <video
        id="video-player"
        className="video-player"
        src={videoSrc}
        controls
        style={{ display: isPlaying ? "block" : "none" }}
        onPause={handlePause}
      ></video>
      {!isPlaying && (
        <button className="play-button" onClick={handlePlay}>
          ▶
        </button>
      )}
    </div>
  );
};

export default VideoSection;
