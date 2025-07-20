"use client"

import { useState } from 'react';
import { FaCreditCard, FaPaypal, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { redirect, } from "next/navigation";

export default function MakePayment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [autoPayment, setAutoPayment] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const paymentOptions = [
    { id: 'card', name: 'Credit/Debit Card', icon: <FaCreditCard className="text-blue-500" /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal className="text-blue-700" /> },
    { id: 'bank', name: 'Bank Transfer', icon:<FaPaypal className="text-blue-700" /> },
    { id: 'mobile', name: 'Mobile Money', icon: <FaMobileAlt className="text-purple-600" /> }
  ];

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission
    console.log({
      paymentMethod,
      autoPayment,
      cardDetails
    });
    alert('Payment processed successfully!');
  };

  const { status } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/login?callbackUrl=/dashboard");
      },
    });
  
    // Show loading indicator while checking authentication status
    if (status === "loading") {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Checking authentication...</p>
          </div>
        </div>
      );
    }
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Make Payment</h1>
          <p className="text-gray-600 mb-6">Complete your contribution to the group savings</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Payment Options */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Payment Method</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPaymentMethod(option.id)}
                    className={`p-4 border rounded-lg flex items-center space-x-3 transition-colors text-gray-800 ${paymentMethod === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                  >
                    <span className="text-xl">{option.icon}</span>
                    <span>{option.name}</span>
                  </button>
                ))}
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
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
                          onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {paymentMethod === 'paypal' && (
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <FaPaypal className="text-blue-700 text-4xl mx-auto mb-4" />
                  <p className="mb-4 text-gray-800">You&apos;ll be redirected to PayPal to complete your payment</p>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-gray-800">
                    Continue to PayPal
                  </button>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-gray-800">Bank Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-gray-800">Account Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'mobile' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Network</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                      <option>MTN</option>
                      <option>Vodafone</option>
                      <option>AirtelTigo</option>
                      <option>Glo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    />
                  </div>
                </div>
              )}

              {/* Auto Payment Option */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={autoPayment}
                    onChange={() => setAutoPayment(!autoPayment)}
                  />
                  <span className="text-gray-700">Set up automatic payments</span>
                </label>
                {autoPayment && (
                  <div className="mt-3 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">
                          Download, fill and submit this <a 
            href="/static/Blank.pdf" 
            download={"./PAD.pdf"}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >pdf</a> to setup automatic payments. Automatic payments will be processed on the due date. You can cancel anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Payment Summary */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Payment Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Group:</span>
                  <span className="font-medium text-gray-800">Family Circle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contribution:</span>
                  <span className="font-medium text-gray-800">$100.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="font-medium text-gray-800">Weekly</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-bold text-lg text-gray-800">$100.00</span>
                </div>
              </div>

              <button
                onClick={handlePaymentSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Complete Payment
              </button>

              <div className="mt-4 text-xs text-gray-500">
                <p>Your payment is secured with 256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}