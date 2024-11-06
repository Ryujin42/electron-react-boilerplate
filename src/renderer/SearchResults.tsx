import React from 'react';

type SearchResultsProps = {
  results: any[];
  setCurrentVideoId: React.Dispatch<React.SetStateAction<string | null>>;
};

const SearchResults: React.FC<SearchResultsProps> = ({ results, setCurrentVideoId }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li
            key={result.id.videoId}
            onClick={() => setCurrentVideoId(result.id.videoId)}
            style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', flexDirection: 'row' }}
          >
            <img
              src={result.snippet.thumbnails.default.url}
              alt={result.snippet.title}
              style={{ marginRight: '15px', width: '120px', height: '90px' }}
            />
            <div>
              <h3>{result.snippet.title}</h3>
              <p>{result.snippet.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

