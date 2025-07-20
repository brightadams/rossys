"use client"
import { FaUsers, FaMoneyBillWave, FaCalendarAlt, FaPlus, FaSearch } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link"

export default function MyGroups() {
  // Sample data - replace with actual data from your backend
  const activeGroups = [
    {
      id: 1,
      name: "Family Circle",
      members: 5,
      contribution: 100,
      frequency: "weekly",
      nextPayout: "2023-11-15",
      yourTurn: "3 weeks"
    },
    {
      id: 2,
      name: "Office Squad",
      members: 4,
      contribution: 75,
      frequency: "bi-weekly",
      nextPayout: "2023-11-22",
      yourTurn: "Next"
    }
  ];

  const inactiveGroups = [
    {
      id: 3,
      name: "Study Group Savers",
      members: 6,
      contribution: 50,
      frequency: "monthly",
      completed: "2023-10-30"
    },
    {
      id: 4,
      name: "Friends Fund",
      members: 5,
      contribution: 80,
      frequency: "weekly",
      completed: "2023-09-15"
    }
  ];

  const { data: session, status } = useSession({
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
      {/* Header with search and create button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Groups</h1>
          <p className="text-gray-600">Manage your active savings groups and view completed ones</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search groups..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button >
            <Link href="/join-group" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg whitespace-nowrap">
              <FaPlus className="mr-2" /> Join Group
            </Link>
          </button>
        </div>
      </div>

      {/* Active Groups Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Active Groups</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {activeGroups.length} active
          </span>
        </div>

        {activeGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeGroups.map(group => (
              <div key={group.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{group.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FaUsers className="mr-1" /> {group.members} members
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <IoIosArrowForward className="text-xl" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Contribution</p>
                    <p className="font-medium text-gray-800">${group.contribution} {group.frequency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Next payout</p>
                    <p className="font-medium text-gray-800">{group.nextPayout}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Your turn</p>
                    <p className={`font-medium text-gray-800 ${group.yourTurn === "Next" ? "text-green-600" : ""}`}>
                      {group.yourTurn}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total pot</p>
                    <p className="font-medium text-gray-800">${group.contribution * group.members}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl text-center">
            <p className="text-gray-500">You don't have any active groups yet</p>
            <button className="mt-4 flex items-center justify-center mx-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              <FaPlus className="mr-2" /> Join a Group
            </button>
          </div>
        )}
      </section>

      {/* Inactive Groups Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Completed Groups</h2>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {inactiveGroups.length} completed
          </span>
        </div>

        {inactiveGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inactiveGroups.map(group => (
              <div key={group.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-gray-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{group.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FaUsers className="mr-1" /> {group.members} members
                    </div>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800">
                    <IoIosArrowForward className="text-xl" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Contribution</p>
                    <p className="font-medium text-gray-800">${group.contribution} {group.frequency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Completed on</p>
                    <p className="font-medium text-gray-800">{group.completed}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total saved</p>
                    <p className="font-medium text-gray-800">${group.contribution * group.members * group.members}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="font-medium text-gray-500">Completed</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl text-center">
            <p className="text-gray-500">No completed groups yet</p>
          </div>
        )}
      </section>
    </div>
  );
}