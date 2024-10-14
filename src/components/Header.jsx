import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Online Book Rental</h1>
            <nav>
                <Link to="/">หน้าหลัก</Link>
                <Link to="/search">เช่าหนังสือ</Link>
                <Link to="/profile">โปรไฟล์</Link>
            </nav>
        </header>
    );
};

export default Header;
