// src/components/SearchBar.jsx
import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Update the path to correctly reference the styles

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <form onSubmit={handleSearch} className="search-bar"> {/* Add className for styling */}
            <input 
                type="text" 
                placeholder="ค้นหาหนังสือที่ต้องการ.." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button type="submit">ค้นหา</button>
        </form>
    );
};

export default SearchBar;
