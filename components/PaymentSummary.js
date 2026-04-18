import React from 'react';

const PaymentSummary = ({
    groupName = 'Family Circle',
    contribution = '$100.00',
    frequency = 'Weekly',
    total = '$100.00',
    onSubmit
}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Payment Summary</h2>

            <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                    <span className="text-gray-600">Group:</span>
                    <span className="font-medium text-gray-800">{groupName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Contribution:</span>
                    <span className="font-medium text-gray-800">{contribution}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium text-gray-800">{frequency}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold text-lg text-gray-800">{total}</span>
                </div>
            </div>

            <button
                onClick={onSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
                Complete Payment
            </button>

            <div className="mt-4 text-xs text-gray-500">
                <p>Your payment is secured with 256-bit SSL encryption</p>
            </div>
        </div>
    );
};

export default PaymentSummary;
