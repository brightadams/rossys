'use client';

import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaUser, FaEnvelope, FaPhone, FaIdCard, FaArrowRight, FaClock } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from "next/navigation";

export default function ProfilePage() {
  const { session,status, } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/dashboard");
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Mock user data - replace with actual API call
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - in a real app, you would fetch this from your backend
        const mockUser = {
          name: session?.user?.name || 'John Doe',
          email: session?.user?.email || 'john@example.com',
          phone: '+1234567890',
          isVerified: false, // This would come from your backend
          verificationStatus: 'unverified', // unverified, pending, verified
          idType: 'Passport', // Could be null if not submitted
          idNumber: 'AB1234567', // Could be null if not submitted
          joinedDate: '2023-10-15T08:30:00Z'
        };
        
        setUser(mockUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [session]);

  const handleVerify = () => {
    router.push('/verification');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
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
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        ) : user ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Profile Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <FaUser className="text-blue-500 text-3xl" />
                    </div>
                    {user.isVerified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <FaCheckCircle className="text-white text-lg" />
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-center text-gray-800">{user.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">{user.email}</p>
                  
                  {/* Verification Status */}
                  <div className={`mt-4 px-4 py-2 rounded-full text-sm font-medium ${
                    user.isVerified 
                      ? 'bg-green-100 text-green-800' 
                      : user.verificationStatus === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {user.isVerified 
                      ? 'Verified User' 
                      : user.verificationStatus === 'pending'
                        ? 'Verification Pending'
                        : 'Unverified Account'}
                  </div>

                  {!user.isVerified && (
                    <button
                      onClick={handleVerify}
                      className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                    >
                      Verify Account <FaArrowRight className="ml-2" />
                    </button>
                  )}

                  <div className="mt-6 w-full border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">Member since</p>
                    <p className="text-sm font-medium text-gray-800">{formatDate(user.joinedDate)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium text-gray-800">{user.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium text-gray-800">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="font-medium text-gray-800">{user.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Details */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Verification Details</h3>
                {user.isVerified ? (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">Your account is verified</p>
                        <p className="text-sm text-green-700 mt-1">
                          Your identity has been successfully verified. Thank you for completing the process.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : user.verificationStatus === 'pending' ? (
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FaClock className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-yellow-800">Verification in progress</p>
                        <p className="text-sm text-yellow-700 mt-1">
                          Your documents are under review. This usually takes 1-2 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FaTimesCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-800">Account not verified</p>
                        <p className="text-sm text-red-700 mt-1">
                          Please verify your account to access all features and increase your trust score.
                        </p>
                        <button
                          onClick={handleVerify}
                          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center"
                        >
                          Start Verification <FaArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {user.idType && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <FaIdCard className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">ID Type</p>
                        <p className="font-medium text-gray-800">{user.idType}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaIdCard className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">ID Number</p>
                        <p className="font-medium text-gray-800">{user.idNumber}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <FaTimesCircle className="text-red-500 text-4xl mx-auto mb-4" />
            <p className="text-gray-600">Failed to load profile data</p>
          </div>
        )}
      </div>
    </div>
  );
}