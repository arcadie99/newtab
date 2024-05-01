'use client';

// components/SearchComponent.jsx
import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4 h-full">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search Google"
        className="border-2 border-gray-300 p-2 rounded-l-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
