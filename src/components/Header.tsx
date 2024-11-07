import React from 'react';

type HeaderProps = {
  searchQuery: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

const Header: React.FC<HeaderProps> = ({ searchQuery, handleInputChange, handleKeyPress, handleSearch }) => {
  return (
    <header className="bg-blue">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;

