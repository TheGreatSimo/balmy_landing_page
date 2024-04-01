import React from "react";

const VideoPlayer = () => {
  const videoUrl = "https://www.youtube.com/embed/Hif1tgbH6C8?rel=0";

  return (
    <div className="flex justify-center items-center mt-20 max-container">
      <div className="max-md:h-[250px] max-xl:h-[400px] h-[640px]  w-[80%] max-lg:w-[99%] shadow-2xl">
        <video
          width="100%"
          height="100%"
          controls
          autoPlay
          muted
          src={videoUrl}
          aria-label="Introduce Your Child to the World of Music. Unlock Their Potential with Our Tongue Drum"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
