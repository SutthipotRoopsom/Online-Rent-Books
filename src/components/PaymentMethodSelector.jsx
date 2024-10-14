// src/components/PaymentMethodSelector.jsx
import React, { useState } from 'react';

const PaymentMethodSelector = ({ onSelectPaymentMethod }) => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleSelection = (method) => {
        setSelectedMethod(method);
        onSelectPaymentMethod(method);
    };

    return (
        <div className="payment-method-selector">
            <h3>เลือกช่องทางการจ่ายเงิน</h3>
            <div>
                <label>
                    <input
                        type="radio"
                        value="PromptPay"
                        checked={selectedMethod === 'PromptPay'}
                        onChange={() => handleSelection('PromptPay')}
                    />
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8X0T7dsjemng6uwUwedv-hL2eRcuTvAYKA&s" 
                        alt="PromptPay" 
                        style={{ width: '30px', marginRight: '8px' }} 
                    />
                    PromptPay
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="TrueMoney"
                        checked={selectedMethod === 'TrueMoney'}
                        onChange={() => handleSelection('TrueMoney')}
                    />
                    <img 
                        src="https://www.gump.in.th/uploaded_files/img/TAN/wallet-logo.png" 
                        alt="TrueMoney" 
                        style={{ width: '30px', marginRight: '8px' }} 
                    />
                    TrueMoney
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="CreditCard"
                        checked={selectedMethod === 'CreditCard'}
                        onChange={() => handleSelection('CreditCard')}
                    />
                    <img 
                        src="https://miro.medium.com/v2/resize:fit:499/0*OZfLlJORkjtfry3h.png" 
                        alt="Credit Card" 
                        style={{ width: '30px', marginRight: '8px' }} 
                    />
                    Credit Card
                </label>
            </div>
            
        </div>
    );
};

export default PaymentMethodSelector;
