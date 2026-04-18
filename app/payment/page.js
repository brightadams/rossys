"use client"

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import PaymentMethodSelector from '@/components/PaymentMethodSelector';
import CardPaymentForm from '@/components/CardPaymentForm';
import PayPalPayment from '@/components/PayPalPayment';
import BankTransferForm from '@/components/BankTransferForm';
import MobileMoneyForm from '@/components/MobileMoneyForm';
import PaymentSummary from '@/components/PaymentSummary';
import AutoPaymentToggle from '@/components/AutoPaymentToggle';

export default function MakePayment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [autoPayment, setAutoPayment] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: ''
  });
  const [mobileDetails, setMobileDetails] = useState({
    network: 'MTN',
    mobileNumber: ''
  });

  const handlePaymentSubmit = (e) => {
    if (e) e.preventDefault();
    // Handle payment submission
    console.log({
      paymentMethod,
      autoPayment,
      cardDetails,
      bankDetails,
      mobileDetails
    });
    alert('Payment processed successfully!');
  };

  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login?callbackUrl=/dashboard");
  //   },
  // });

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
              <PaymentMethodSelector
                selectedMethod={paymentMethod}
                onMethodChange={setPaymentMethod}
              />

              {/* Payment Forms */}
              <div className="mt-6">
                {paymentMethod === 'card' && (
                  <CardPaymentForm
                    cardDetails={cardDetails}
                    onCardDetailsChange={setCardDetails}
                  />
                )}

                {paymentMethod === 'paypal' && <PayPalPayment />}

                {paymentMethod === 'bank' && (
                  <BankTransferForm
                    bankDetails={bankDetails}
                    onBankDetailsChange={setBankDetails}
                  />
                )}

                {paymentMethod === 'mobile' && (
                  <MobileMoneyForm
                    mobileDetails={mobileDetails}
                    onMobileDetailsChange={setMobileDetails}
                  />
                )}
              </div>

              {/* Auto Payment Option */}
              <AutoPaymentToggle
                autoPayment={autoPayment}
                onToggle={() => setAutoPayment(!autoPayment)}
              />
            </div>

            {/* Right Column - Payment Summary */}
            <PaymentSummary
              groupName="Family Circle"
              contribution="$100.00"
              frequency="Weekly"
              total="$100.00"
              onSubmit={handlePaymentSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}