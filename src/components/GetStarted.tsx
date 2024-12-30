import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function GetStarted() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with email:', email);
  };

  return (
    <div className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8" id="get-started">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Start Your Health Journey Today
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join thousands of others who have transformed their eating habits with our personalized meal plans.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:mx-auto sm:max-w-lg">
          <div className="sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                required
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full px-4 py-3 font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}