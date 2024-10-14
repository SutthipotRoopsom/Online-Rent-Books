import React, { useState } from 'react';
import "../styles/Checkout.css"; // Ensure you have styles for the checkout page
import PaymentMethodSelector from '../components/PaymentMethodSelector';

const Checkout = ({ rentedBooks, onOrder, setRentedBooks }) => {
    const [rentalDays, setRentalDays] = useState({});
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    
    
    // Credit Card state
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: ''
    });

    const handleDaysChange = (id, days) => {
        setRentalDays(prev => ({ ...prev, [id]: days }));
    };

    const totalPrice = rentedBooks.reduce((total, book) => total + (book.price * (rentalDays[book.id] || 1)), 0);

    const handleOrder = () => {
        if (!selectedPaymentMethod) {
            alert('กรุณาเลือกวิธีการชำระเงินก่อนทำการสั่งซื้อ');
            return;
        }

        const orderedBooks = rentedBooks.map(book => ({
            ...book,
            expiration: new Date(Date.now() + (rentalDays[book.id] || 1) * 24 * 60 * 60 * 1000),
            orderDate: new Date(),
        }));
        onOrder(orderedBooks);
    };

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-header">ตะกร้าสินค้า</h1>
            <div className="rented-books-list">
                <h3>หนังสือที่เลือกไว้ : </h3>
                <ul className="checkout-list">
                    {rentedBooks.map((book) => (
                        <li key={book.id} className="checkout-item">
                            <span>{book.title} - ราคาต่อวัน : {book.price} บาท </span>
                            <div className="rental-days-input">
                                <label>
                                    จำนวนวันที่เช่า :  <span></span>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        defaultValue={rentalDays[book.id] || 1} 
                                        onChange={(e) => handleDaysChange(book.id, e.target.value)} 
                                    />
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="total-price-container">
                <h3>ราคาสุทธิ :  <span className="total-price">{totalPrice} Baht</span></h3>
            </div>
            <PaymentMethodSelector onSelectPaymentMethod={setSelectedPaymentMethod} />
            {selectedPaymentMethod === 'CreditCard' && (
                <div className="credit-card-details">
                    <h3>Enter Credit Card Details:</h3>
                    <form>
                        <div className="input-group">
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleCardChange}
                                placeholder="1234 5678 9123 4567"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="cardHolderName">Card Holder Name:</label>
                            <input
                                type="text"
                                id="cardHolderName"
                                name="cardHolderName"
                                value={cardDetails.cardHolderName}
                                onChange={handleCardChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleCardChange}
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                placeholder="123"
                                required
                            />
                        </div>
                    </form>
                </div>
            )}
            <button 
                className="place-order-button" 
                onClick={handleOrder} 
                disabled={!selectedPaymentMethod} // ปิดการใช้งานปุ่มหากยังไม่ได้เลือกวิธีการชำระเงิน
            >
                ยืนยันคำสั่งซื้อ
            </button>
        </div>
    );
};

export default Checkout;
