import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';
import HomeSection from './HomeSection';
import SearchResults from './SearchResults';
import VideoPlayer from './VideoPlayer';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const fetchHomeData = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          q: 'trending music',
          type: 'video',
          videoCategoryId: '10',
          key: API_KEY,
        },
      });
      if (response.data && response.data.items) {
        setHomeData(response.data.items);
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          q: searchQuery,
          type: 'video',
          key: API_KEY,
        },
      });
      if (response.data && response.data.items) {
        setResults(response.data.items);
      }
    } catch (error) {
      console.error('Error fetching data from YouTube API:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleSearch={handleSearch}
      />
      <main>
        {searchQuery.trim() === '' ? (
          <HomeSection homeData={homeData} setCurrentVideoId={setCurrentVideoId} />
        ) : (
          <SearchResults results={results} setCurrentVideoId={setCurrentVideoId} />
        )}
        {currentVideoId && <VideoPlayer currentVideoId={currentVideoId} />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

