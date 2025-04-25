import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Transactions from './components/Transactions';
import Sidebar from './components/Sidebar';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar - now treated as an overlay on mobile */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar />
          <div className="flex-1 overflow-y-auto px-4 lg:px-8 pt-4 pb-6">
            <div className={`${isMobile ? 'mt-12' : 'mt-2'}`}>
              <Overview />
              <Transactions />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;