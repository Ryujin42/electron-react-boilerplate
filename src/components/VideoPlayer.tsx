import React from 'react';

type VideoPlayerProps = {
  currentVideoId: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ currentVideoId }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Now Playing:</h2>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&modestbranding=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;

