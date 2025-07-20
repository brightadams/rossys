'use client';

import { useState, useEffect } from 'react';
import { FaSearch, FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import { redirect,  } from "next/navigation";

export default function PaymentHistory() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 10;

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockPayments = [
          {
            id: 'txn_001',
            group: 'Family Circle',
            amount: 100,
            date: '2025-06-15T10:30:00Z',
            status: 'completed',
            method: 'Card',
            reference: 'FAMILY-2023-11'
          },
          {
            id: 'txn_002',
            group: 'Office Squad',
            amount: 75,
            date: '2025-06-08T14:45:00Z',
            status: 'completed',
            method: 'PayPal',
            reference: 'OFFICE-2023-11'
          },
          {
            id: 'txn_003',
            group: 'Study Group',
            amount: 50,
            date: '2025-05-01T09:15:00Z',
            status: 'failed',
            method: 'Bank Transfer',
            reference: 'STUDY-2023-11'
          },
          {
            id: 'txn_004',
            group: 'Friends Fund',
            amount: 80,
            date: '2025-04-25T16:20:00Z',
            status: 'pending',
            method: 'Mobile Money',
            reference: 'FRIENDS-2023-10'
          },
          // Add more mock data as needed...
        ];
        
        setPayments(mockPayments);
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  // Filter payments based on search and status
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.group.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         payment.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);
  const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-green-500" />;
      case 'failed':
        return <FaTimesCircle className="text-red-500" />;
      case 'pending':
        return <FaClock className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Payment History</h1>
          <p className="text-gray-600">View all your contribution payments</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by group or reference..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Status:</span>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading payment history...</p>
            </div>
          ) : currentPayments.length === 0 ? (
            <div className="p-8 text-center">
              <FaMoneyBillWave className="mx-auto text-gray-400 text-4xl mb-4" />
              <p className="text-gray-600">No payments found matching your criteria</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Group
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Method
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentPayments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{payment.group}</div>
                          <div className="text-sm text-gray-500">{payment.reference}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(payment.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ${payment.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.method}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(payment.status)}
                            <span className="ml-2 text-sm text-gray-500 capitalize">{payment.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 flex items-center">
                            <FiDownload className="mr-1" /> Receipt
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstPayment + 1}</span> to{' '}
                        <span className="font-medium">{Math.min(indexOfLastPayment, filteredPayments.length)}</span> of{' '}
                        <span className="font-medium">{filteredPayments.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              currentPage === page
                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          Next
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}