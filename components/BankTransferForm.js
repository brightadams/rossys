import React from 'react';

const BankTransferForm = ({ bankDetails, onBankDetailsChange }) => {
    const handleInputChange = (field, value) => {
        onBankDetailsChange({ ...bankDetails, [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                <input
                    type="text"
                    placeholder="Enter bank name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    value={bankDetails?.bankName || ''}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input
                    type="text"
                    placeholder="Enter account number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    value={bankDetails?.accountNumber || ''}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                />
            </div>
        </div>
    );
};

export default BankTransferForm;
