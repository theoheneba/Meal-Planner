import React from 'react';
import { Utensils } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Utensils className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MealMaster</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#features" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#get-started" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <GetStarted />
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} MealMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;