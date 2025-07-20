"use client"
import React, { useState } from 'react';
import Link from "next/link"
import { 
    FaUsers, 
    FaMoneyBillWave, 
    FaHistory,
    FaBell,
    FaHome,
    FaSearch,
    FaUser,
    FaCheckCircle,
    FaSignOutAlt
} from 'react-icons/fa';
import {signOut} from 'next-auth/react'

export default function Nav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">RoSSys</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href={"/dashboard"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Dashboard
              </Link>
              <Link href={"/my-groups"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                My Groups
              </Link>
              <Link href={"/payments-history"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Payments
              </Link>
            </div>
          </div>

          {/* Right side - Search, Notifications, Profile */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-gray-100 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Search</span>
              <FaSearch className="h-5 w-5" />
            </button>

            <button className="ml-4 bg-gray-100 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative">
              <span className="sr-only">Notifications</span>
              <FaBell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Profile dropdown */}
            <div className="ml-4 relative">
              <div 
                className="flex items-center cursor-pointer"
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
              >
                <div className="flex-shrink-0">
                  <img 
                    className="h-8 w-8 rounded-full" 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User profile" 
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium text-gray-700">John Doe</p>
                </div>
              </div>

              {/* Dropdown menu */}
              {isProfileOpen && (
                <div 
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  onMouseEnter={() => setIsProfileOpen(true)}
                  onMouseLeave={() => setIsProfileOpen(false)}
                >
                  <Link href={"/my-profile"} className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    <FaUser className="mr-2 text-gray-500" />
                    My Profile
                  </Link>
                  <a 
                    href="#" 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaCheckCircle className="mr-2 text-blue-500" />
                    Verify Account
                  </a>
                  <button 
                     onClick={()=>{signOut()}}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="mr-2 text-red-500" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <a href="#" className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <FaHome className="inline mr-2" /> Dashboard
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <FaUsers className="inline mr-2" /> My Groups
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <FaMoneyBillWave className="inline mr-2" /> Payments
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <FaHistory className="inline mr-2" /> History
          </a>
        </div>
      </div>
    </nav>
  )
}