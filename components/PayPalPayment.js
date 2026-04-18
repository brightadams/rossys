import React from 'react';
import { FaPaypal } from 'react-icons/fa';

const PayPalPayment = () => {
    return (
        <div className="bg-blue-50 p-6 rounded-lg text-center">
            <FaPaypal className="text-blue-700 text-4xl mx-auto mb-4" />
            <p className="mb-4 text-gray-800">You&apos;ll be redirected to PayPal to complete your payment</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors">
                Continue to PayPal
            </button>
        </div>
    );
};

export default PayPalPayment;
