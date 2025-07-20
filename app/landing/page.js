import Head from 'next/head';
import Link from 'next/link';
import { FaShieldAlt, FaUsers, FaGlobe, FaHandHoldingUsd, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Head>
        <title>Group Susu - Secure Digital Rotating Savings</title>
        <meta name="description" content="Modern protection for traditional susu savings groups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="h-6 w-6" />
            <span className="text-xl font-bold">Group Susu</span>
          </div>
          <Link href="/login" className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Secure <span className="text-blue-600">Group Savings</span> Made Simple
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Modern digital protection for traditional rotating savings schemes. Save with confidence, no matter where your members are located.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">
            Start Your Group
          </Link>
          <Link href="#how-it-works" className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-bold text-lg transition duration-300">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Group Susu?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">No Fraud Risk</h3>
              <p className="text-gray-700 text-center">
                Funds held securely in escrow until payout time. No more worries about leaders running away with group money.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaGlobe className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Global Groups</h3>
              <p className="text-gray-700 text-center">
                Connect with trustworthy members worldwide, not just in your local community.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaCheckCircle className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Interest-Free</h3>
              <p className="text-gray-700 text-center">
                Perfect for communities and faiths that avoid interest-based financial systems.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaSyncAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Automated Rotation</h3>
              <p className="text-gray-700 text-center">
                Fair, transparent scheduling of payouts with no manual work required.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Trust Building</h3>
              <p className="text-gray-700 text-center">
                Member ratings and verification systems create accountability and reliability.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHandHoldingUsd className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Traditional Values</h3>
              <p className="text-gray-700 text-center">
                All the benefits of susu with modern security and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How Group Susu Works</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Form Your Group</h3>
                    <p className="text-gray-700">
                      Gather 5 members who agree to contribute a fixed amount (like 100₵) each period.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Set Contribution Schedule</h3>
                    <p className="text-gray-700">
                      Decide on contribution frequency (weekly, monthly) and payment order.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Rotating Payouts</h3>
                    <p className="text-gray-700">
                      Each period, one member receives the full pot (500₵) until all members have received their turn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Digital Trust Revolution</h3>
              <p className="mb-4">
                Just like people now trust strangers through Airbnb and ride-sharing, Group Susu brings that same innovation to community finance.
              </p>
              <p>
                What seemed risky in the early 2000s is now commonplace - we&apos;re making the same transformation for rotating savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Save With Confidence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the digital revolution of traditional susu savings today.
          </p>
          <Link href="/login" className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-bold text-lg transition duration-300">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaShieldAlt className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Group Susu</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-300">
                © {new Date().getFullYear()} Group Susu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}