"use client"
import { useState } from 'react';
import { 
  FaUsers, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaInfoCircle, 
  FaShareAlt,
} from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

export default function CreateGroup() {
  const [groupName, setGroupName] = useState('Team 7 Circle');
  const [memberCount, setMemberCount] = useState(3);
  const [contributionAmount, setContributionAmount] = useState(100);
  const [paymentFrequency, setPaymentFrequency] = useState('bi-weekly');
  const [startDate, setStartDate] = useState('2025-07-20');

  const totalPot = memberCount * contributionAmount;
  const cycleDuration = memberCount;

  const { //data: session, 
          status } = useSession({
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
    <div className="min-h-screen bg-gray-50">
     

      {/* Create Group Content */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Group Details</h1>
        <p className="text-gray-600 mb-8">Configure your group settings and start saving together.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-slate-900">
                <FaUsers className="text-blue-500 mr-2" /> Group Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                  <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Members</label>
                  <input
                    type="number"
                    min="2"
                    max="10"
                    value={memberCount}
                    onChange={(e) => setMemberCount(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contribution Amount ($)</label>
                  <input
                    type="number"
                    min="10"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-slate-900">
                <FaCalendarAlt className="text-blue-500 mr-2" /> Payment Schedule
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Frequency</label>
                  <select
                    value={paymentFrequency}
                    onChange={(e) => setPaymentFrequency(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Create Group
              </button>
            </div>
          </div>

          {/* Right Column - Summary and Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-slate-900">
                <FaMoneyBillWave className="text-blue-500 mr-2 " /> Group Summary
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total pot per cycle:</span>
                  <span className="font-medium text-slate-900">${totalPot.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Each member contributes:</span>
                  <span className="font-medium text-slate-900">${contributionAmount} {paymentFrequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Complete cycle duration:</span>
                  <span className="font-medium text-slate-900">{cycleDuration} {paymentFrequency} periods</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-slate-900">
                <FaInfoCircle className="text-blue-500 mr-2" /> How It Works
              </h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaShareAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Invite Members</span>
                    <p className="text-sm text-gray-600">Share your invite code with trusted friends and family</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCalendarAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Set Schedule</span>
                    <p className="text-sm text-gray-600">Choose weekly, bi-weekly, or monthly contributions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaMoneyBillWave className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Rotate Payouts</span>
                    <p className="text-sm text-gray-600">Each member takes turns receiving the total pot</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaInfoCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Stay Secure</span>
                    <p className="text-sm text-gray-600">All transactions are tracked and secured</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Tips for Success</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Choose trusted members with good payment history</li>
                <li>Set realistic contribution amounts</li>
                <li>Establish clear group rules and expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}