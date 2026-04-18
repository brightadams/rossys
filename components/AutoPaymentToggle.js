import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AutoPaymentToggle = ({ autoPayment, onToggle }) => {
    return (
        <div className="mt-6 pt-6 border-t border-gray-200">
            <label className="flex items-center space-x-3 cursor-pointer">
                <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={autoPayment}
                    onChange={onToggle}
                />
                <span className="text-gray-700">Set up automatic payments</span>
            </label>
            {autoPayment && (
                <div className="mt-3 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-gray-700">
                                Download, fill and submit this{' '}
                                <a
                                    href="/static/Blank.pdf"
                                    download="PAD.pdf"
                                    className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    pdf
                                </a>
                                {' '}to setup automatic payments. Automatic payments will be processed on the due date. You can cancel anytime.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AutoPaymentToggle;
