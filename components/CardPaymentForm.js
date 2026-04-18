import React from 'react';

const CardPaymentForm = ({ cardDetails, onCardDetailsChange }) => {
    const handleInputChange = (field, value) => {
        onCardDetailsChange({ ...cardDetails, [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    value={cardDetails.number}
                    onChange={(e) => handleInputChange('number', e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    value={cardDetails.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        value={cardDetails.expiry}
                        onChange={(e) => handleInputChange('expiry', e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        value={cardDetails.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardPaymentForm;
