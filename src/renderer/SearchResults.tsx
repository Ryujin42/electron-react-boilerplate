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
            style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
          >
            <h3>{result.snippet.title}</h3>
            <p>{result.snippet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

