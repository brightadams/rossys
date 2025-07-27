'use client';


import { FaCheckCircle } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function VerificationCompletePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <FaCheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Verification Complete!</h1>
        <p className="text-gray-600 mb-6">
          Your account has been successfully verified. You now have full access to all features.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Link
            href="/my-profile"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium"
          >
            Go to profile
          </Link>
          
          <button
            onClick={() => router.back()}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-medium border border-gray-300"
          >
            Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}