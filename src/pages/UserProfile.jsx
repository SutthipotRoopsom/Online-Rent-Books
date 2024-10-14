    // src/pages/UserProfile.jsx
    import React from 'react';
    import "../styles/UserProfile.css"; // Ensure you have a CSS file for styling

    const UserProfile = ({ previouslyOrderedBooks = [] }) => {
        const sortedOrderedBooks = Array.isArray(previouslyOrderedBooks)
            ? previouslyOrderedBooks.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
            : [];

        return (
            <div className="user-profile-container">
                <h2 className="user-profile-header">โปรไฟล์ผู้ใช้</h2>
                <h3 className="ordered-books-header">หนังสือที่คุณเช่าก่อนหน้านี้ :</h3>
                {sortedOrderedBooks.length === 0 ? (
                    <p className="no-books-message">ไม่มีหนังสือที่เช่ามาก่อน</p>
                ) : (
                    <ul className="ordered-books-list">
                        {sortedOrderedBooks.map((book) => (
                            <li key={book.id} className="ordered-book-item">
                                <span className="book-title">{book.title}</span>
                                <div className="book-details">
                                    <span className="order-date">เช่าเมื่อ : {new Date(book.orderDate).toLocaleDateString()}</span>
                                    <span className="expiration-date">หมดอายุ : {new Date(book.expiration).toLocaleDateString()}</span>
                                    <span className="quantity">จำนวน : {book.quantity}</span>&nbsp;&nbsp;
                                    <a href={book.fileLink} target="_blank" rel="noopener noreferrer" className="download-link">
                                        <span></span>Read E-book
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    export default UserProfile;
