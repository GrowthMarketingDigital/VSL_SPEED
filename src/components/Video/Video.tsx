import { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/92be81cf-06f2-4dc3-9145-e762e8be94b8/players/657c884ad817a2000939b75b/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="vid_657c884ad817a2000939b75b" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img
        id="thumb_657c884ad817a2000939b75b"
        src="https://images.converteai.net/92be81cf-06f2-4dc3-9145-e762e8be94b8/players/657c884ad817a2000939b75b/thumbnail.jpg"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        alt="Video Thumbnail"
      />
      <div
        id="backdrop_657c884ad817a2000939b75b"
        style={{
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100%',
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
        }}
      ></div>
    </div>
  );
};

export default VideoPlayer;
