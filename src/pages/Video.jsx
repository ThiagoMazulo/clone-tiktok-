import React from "react";
import "./video.css";
import video1 from "./src/video1.mp4";

function Video () {
    return (
        <div className="video">
            
            <video 
            className="video_player" 
                // src={video1}
            
            >  
            <source src={video1} type="video/mp4"/> 
            </video>
        </div>

    );
};

export default Video;