"use client"
import { 
  FaPiggyBank, 
  FaUsers, 
  FaCalendarAlt, 
  FaStar, 
  FaMoneyBillWave, 
  FaBell,
  FaPlus,
  FaChevronRight,
} from 'react-icons/fa';
import { redirect, } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link"

export default function Dashboard() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Total Saved Card */}
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg mr-3">
                    <FaPiggyBank className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Total Saved</h3>
                    <p className="text-2xl font-bold mt-1 text-slate-900">$2,450</p>
                  </div>
                </div>
                <div className="flex items-center text-green-500 text-xs mt-3">
                  <span className="inline-block mr-1">↑</span> +12% from last month
                </div>
              </div>

              {/* Active Groups Card */}
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-3">
                    <FaUsers className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Active Groups</h3>
                    <p className="text-2xl font-bold mt-1 text-slate-900">3</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3">2 receiving this month</p>
              </div>

              {/* Next Payout Card */}
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-3">
                    <FaCalendarAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">Next Payout</h3>
                    <p className="text-2xl font-bold mt-1 text-slate-900">$800</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3">In 5 days</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold mb-4 text-slate-900">Quick Actions</h2>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Link href={"/create-group"} className="flex gap-2 flex-center">
                    <FaPlus className="mr-2" /> Create New Group
                  </Link>
                </button>
                <button className="flex bg-emerald-600 items-center border border-gray-300 px-4 py-2 rounded-lg transition-colors text-white">
                  <Link href={"/payment"} className="flex gap-2 flex-center">
                    Make Payment
                  </Link>
                </button>
                <button className="flex bg-slate-600 items-center border border-gray-300 px-4 py-2 rounded-lg transition-colors text-white">
                  <Link href={"/join-group"} className="flex gap-2 flex-center">
                    Join Group
                  </Link>
                </button>
              </div>
            </div>

            {/* Active Groups */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Active Groups</h2>
                <button className="text-blue-600 text-sm">View All</button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <h3 className="font-medium text-slate-900">Family Circle</h3>
                    <p className="text-sm text-gray-500">Upcoming Payments</p>
                  </div>
                  <button className="flex items-center text-blue-600">
                    Active <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <h3 className="font-medium text-slate-900">Office Squad</h3>
                    <p className="text-sm text-gray-500">$75 due</p>
                  </div>
                  <button className="flex items-center text-blue-600">
                    Active <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Reliability Score */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-lg mr-3">
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Reliability Score</h2>
                  <p className="text-3xl font-bold mt-1 text-slate-900">98%</p>
                </div>
              </div> 
              <p className="text-green-500 text-sm mt-2">Excellent rating</p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold mb-4 text-slate-900">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { icon: FaMoneyBillWave, bg: 'bg-green-100', color: 'text-green-600', title: 'Payment Received', desc: 'You received $200 from Study Group Savers', time: '2 hours ago' },
                  { icon: FaMoneyBillWave, bg: 'bg-blue-100', color: 'text-blue-600', title: 'Payment Made', desc: 'You paid $100 to Family Circle', time: '1 day ago' },
                  { icon: FaUsers, bg: 'bg-purple-100', color: 'text-purple-600', title: 'New Member Joined', desc: 'Sarah joined Office Squad', time: '2 days ago' },
                  { icon: FaBell, bg: 'bg-yellow-100', color: 'text-yellow-600', title: 'Payment Reminder', desc: 'Office Squad payment due tomorrow', time: '3 days ago' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className={`${item.bg} p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`${item.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="flex items-center text-blue-600 mt-4 hover:text-blue-700 transition-colors">
                <FaPlus className="mr-2" /> Create Group
              </button>
            </div>

            {/* Top Performers */}
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold mb-4">Top Performers</h2>
              <div className="space-y-3">
                {[
                  { name: 'Maria Santos', reliability: '100%' },
                  { name: 'John Doe', reliability: '98%' },
                  { name: 'David Kim', reliability: '96%' }
                ].map((user, index) => (
                  <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-green-500">{user.reliability} reliability</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}