import React from 'react';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Transactions from './components/Transactions';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      {/* Sidebar - Responsive column width */}
      <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-blue-950 text-white overflow-y-auto h-full scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-900">
        <Sidebar />
      </div>

      {/* Main Content - Responsive column width */}
      <div className="col-span-12 md:col-span-9 lg:col-span-10 m-3 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <Topbar />
        <div className="mx-2 md:mx-4 lg:mx-8 mt-7">
          <Overview />
          <Transactions />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;