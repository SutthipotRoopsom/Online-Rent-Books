// src/components/BookCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, buttonLabel, onRent }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const handleRent = (id) => {
        alert(`"${book.title}" ถูกเพิ่มในตะกร้าสินค้าของคุณ!`); // Notification when renting
        if (onRent) {
            onRent(id); // Call the onRent function passed from parent
        }
    };

    const shortDescription = book.description.length > 100
        ? book.description.substring(0, 100) + '...' 
        : book.description;

    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p className="book-description">
                <strong>Description:</strong> 
                {isExpanded ? book.description : shortDescription}
                {book.description.length > 100 && (
                    <button className="read-more" onClick={handleToggleDescription}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </p>
            <div className="book-actions">
                {onRent && (
                    <button className="rent-button" onClick={() => handleRent(book.id)}>
                        {buttonLabel}
                    </button>
                )}
                <Link to={`/books/${book.id}`}>
                    <button className="view-button">ดูรายละเอียด</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
