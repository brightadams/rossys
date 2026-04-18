import React from 'react';
import { FaCreditCard, FaPaypal, FaMobileAlt, FaUniversity } from 'react-icons/fa';

const PaymentMethodSelector = ({ selectedMethod, onMethodChange }) => {
    const paymentOptions = [
        { id: 'card', name: 'Credit/Debit Card', icon: FaCreditCard, color: 'text-blue-500' },
        { id: 'paypal', name: 'PayPal', icon: FaPaypal, color: 'text-blue-700' },
        { id: 'bank', name: 'Bank Transfer', icon: FaUniversity, color: 'text-green-600' },
        { id: 'mobile', name: 'Mobile Money', icon: FaMobileAlt, color: 'text-purple-600' }
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Payment Method</h2>
            <div className="grid grid-cols-2 gap-4">
                {paymentOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                        <button
                            key={option.id}
                            onClick={() => onMethodChange(option.id)}
                            className={`p-4 border rounded-lg flex items-center space-x-3 transition-colors text-gray-800 ${selectedMethod === option.id
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-300 hover:border-blue-300'
                                }`}
                        >
                            <IconComponent className={`text-xl ${option.color}`} />
                            <span>{option.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PaymentMethodSelector;
