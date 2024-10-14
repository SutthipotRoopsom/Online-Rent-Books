// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const Home = ({ onSearch, books }) => {
    const recommendedBooks = books.filter(book => book.category === 'Fiction')// Example category

    return (
        <div>
            <Header />
            <h2>Welcome to the Online Book Rental Service</h2>
            <SearchBar onSearch={onSearch} />
            <h3>Recommended Books</h3>
            <div className="recommended-books">
                {recommendedBooks.map(book => (
                    <BookCard key={book.id} book={book} buttonLabel="ดูรายละเอียด" showDetails={true} />
                ))}
            </div>
        </div>
    );
};

export default Home;
