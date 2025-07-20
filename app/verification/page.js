'use client';

import { FaCamera, FaIdCard, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import {useRouter } from "next/navigation";

export default function VerificationPage() {
  const router = useRouter();

  const handleStartVerification = () => {
    // Here you would typically integrate with your verification service
    // For now, we'll just simulate starting the process
    router.push('/verification/upload');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Identity</h1>
            <p className="text-gray-600">Complete verification to access all features</p>
          </div>

          <div className="space-y-8">
            {/* Verification Steps */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaCheckCircle className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Why Verify?</h3>
                  <p className="text-gray-600">
                    Verification helps us ensure the security of all group members and builds trust within the community.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">You&apos;ll need to provide:</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaCamera className="text-purple-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">A clear selfie</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Face the camera directly with good lighting</li>
                        <li>Remove hats or sunglasses</li>
                        <li>Make sure your face is clearly visible</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaIdCard className="text-green-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Government-issued ID</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Driver&apos;s license, passport, or state/provincial ID</li>
                        <li>All four corners should be visible</li>
                        <li>Information must be clear and readable</li>
                        <li>ID must be valid and not expired</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Assurance */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-800">Your information is secure</p>
                  <p className="text-sm text-blue-700 mt-1">
                    We use bank-level encryption to protect your data. Your documents will only be used for verification purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={handleStartVerification}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center"
              >
                Begin Verification <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}