import React from 'react';

const MobileMoneyForm = ({ mobileDetails, onMobileDetailsChange }) => {
    const handleInputChange = (field, value) => {
        onMobileDetailsChange({ ...mobileDetails, [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Network</label>
                <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    value={mobileDetails?.network || 'MTN'}
                    onChange={(e) => handleInputChange('network', e.target.value)}
                >
                    <option>MTN</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    value={mobileDetails?.mobileNumber || ''}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                />
            </div>
        </div>
    );
};

export default MobileMoneyForm;
