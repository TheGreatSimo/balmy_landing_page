const VideoPlayer = () => {
  const videoUrl = "https://www.youtube.com/embed/Hif1tgbH6C8?rel=0";

  return (
    <div className="flex justify-center items-center mt-20 max-container">
      <div className="aspect-w-16 aspect-h-9 max-w-[800px] w-full">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="Introduce Your Child to the World of Music. Unlock Their Potential with Our Tongue Drum"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
          Your browser does not support embedded videos.
        </iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
