// src/pages/BookDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookDetail.css'; // Import the CSS file

const BookDetail = ({ books }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return <div>Book not found</div>;
    }

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="book-detail-container">
            <button className="back-button" onClick={handleBack}>
                ย้อนกลับ
            </button>
            <div className="book-detail">
                <img src={book.image} alt={book.title} className="book-detail-image" />
                <div className="book-info">
                    <h1 className="book-title">{book.title}</h1>
                    <h2 className="book-author">by {book.author}</h2>
                    <p className="book-description">{book.description}</p>
                    <p className="book-price">Price per Day : ฿ {book.price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
