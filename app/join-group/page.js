'use client';

import { useState } from 'react';
import { FaSearch, FaUsers, FaMoneyBillWave, FaCalendarAlt, FaPlus, FaArrowRight } from 'react-icons/fa';
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function JoinGroupPage() {
  const [inviteCode, setInviteCode] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'browse'
  const router = useRouter();

  // Mock data - replace with actual API call
  const availableGroups = [
    {
      id: 'group1',
      name: 'Family Circle',
      members: 4,
      contribution: 100,
      frequency: 'weekly',
      nextPayout: '2023-12-15',
      description: 'Family savings group'
    },
    {
      id: 'group2',
      name: 'Office Squad',
      members: 3,
      contribution: 75,
      frequency: 'bi-weekly',
      nextPayout: '2023-12-10',
      description: 'Work colleagues savings'
    },
    {
      id: 'group3',
      name: 'Study Group',
      members: 5,
      contribution: 50,
      frequency: 'monthly',
      nextPayout: '2023-12-20',
      description: 'University students savings'
    }
  ];

  const handleJoinByCode = (e) => {
    e.preventDefault();
    // Validate invite code
    if (inviteCode.trim() === '') {
      alert('Please enter an invite code');
      return;
    }
    // Here you would call your API to join using the code
    console.log('Joining with code:', inviteCode);
    router.push(`/groups/join/${inviteCode}`);
  };

  const handleJoinGroup = (groupId) => {
    // Here you would call your API to join the specific group
    console.log('Joining group:', groupId);
    router.push(`/groups/${groupId}`);
  };

  const filteredGroups = availableGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { status } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/login");
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
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Join a Group</h1>
          <p className="text-gray-600">Connect with trusted savings circles</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'code' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('code')}
          >
            <FaPlus className="mr-2" /> Use Invite Code
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'browse' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('browse')}
          >
            <FaUsers className="mr-2" /> Browse Groups
          </button>
        </div>

        {activeTab === 'code' ? (
          /* Join by Code Section */
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Enter Invite Code</h2>
            <p className="text-gray-600 mb-6">Ask the group admin for the invite code and enter it below</p>
            
            <form onSubmit={handleJoinByCode}>
              <div className="mb-4">
                <label htmlFor="inviteCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Invite Code
                </label>
                <input
                  type="text"
                  id="inviteCode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  placeholder="e.g. FAMILY123"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium"
              >
                Join Group
              </button>
            </form>
          </div>
        ) : (
          /* Browse Groups Section */
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search groups by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Groups List */}
            {filteredGroups.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <FaUsers className="mx-auto text-gray-400 text-4xl mb-4" />
                <p className="text-gray-600">No groups found matching your search</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredGroups.map((group) => (
                  <div key={group.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800">{group.name}</h3>
                        <p className="text-gray-600 mt-1">{group.description}</p>
                      </div>
                      <button
                        onClick={() => handleJoinGroup(group.id)}
                        className="flex items-center justify-center md:justify-end bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg whitespace-nowrap"
                      >
                        Join Group <FaArrowRight className="ml-2" />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Members</p>
                        <p className="font-medium flex items-center">
                          <FaUsers className="mr-1 text-blue-500" /> {group.members}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Contribution</p>
                        <p className="font-medium flex items-center">
                          <FaMoneyBillWave className="mr-1 text-green-500" /> ${group.contribution} {group.frequency}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Next Payout</p>
                        <p className="font-medium flex items-center">
                          <FaCalendarAlt className="mr-1 text-yellow-500" /> {group.nextPayout}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}