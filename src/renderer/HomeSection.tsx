import React from 'react';

type HomeSectionProps = {
  homeData: any[];
  setCurrentVideoId: React.Dispatch<React.SetStateAction<string | null>>;
};

const HomeSection: React.FC<HomeSectionProps> = ({ homeData, setCurrentVideoId }) => {
  return (
    <div>
      <h2>Trending Music</h2>
      <ul>
        {homeData.map((video) => (
          <li
            key={video.id.videoId}
            onClick={() => setCurrentVideoId(video.id.videoId)}
          >
          <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              style={{ marginRight: '15px', width: '120px', height: '90px' }}
            />
            <div>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeSection;

