// src/pages/SearchResults.jsx
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import "../styles/CheckoutButton.css"; // Ensure the path is correct

const SearchResults = ({ books, onRent }) => {
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleSearch = (query) => {
        const results = books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(results);
    };

    return (
        <div style={{ position: 'relative' }}> {/* Relative positioning for parent */}
            <h2>ค้นหาหนังสือที่คุณต้องการ..</h2>
            <SearchBar onSearch={handleSearch} />
            <div className="checkout-button-wrapper">
                <Link to="/checkout">
                    <button className="checkout-button">ตะกร้าของฉัน</button>
                </Link>
            </div>
            <div className="book-list">
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} onRent={onRent} buttonLabel="เช่า" />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
