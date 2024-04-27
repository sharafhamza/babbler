import React from "react";

const Video = ({ src }) => {
  return (
    <video width="750" height="500" autoPlay loop>
      <source src={src} />
    </video>
  );
};

export default Video;
