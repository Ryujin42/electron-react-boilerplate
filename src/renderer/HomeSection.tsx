import React from 'react';

type HomeSectionProps = {
  homeData: any[];
  setCurrentVideoId: React.Dispatch<React.SetStateAction<string | null>>;
};

const HomeSection: React.FC<HomeSectionProps> = ({ homeData, setCurrentVideoId }) => {
  return (
    <div>
      <h2>For You - Trending Music Picks</h2>
      <ul>
        {homeData.map((video) => (
          <li
            key={video.id.videoId}
            onClick={() => setCurrentVideoId(video.id.videoId)}
            style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
          >
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeSection;

