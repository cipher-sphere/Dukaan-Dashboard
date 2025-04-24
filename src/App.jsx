import React from 'react';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Transactions from './components/Transactions';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2 bg-blue-950'><Sidebar /></div>
      <div className='col-span-10 m-3'>
        <Topbar />
        <div className='mx-8 mt-7'>
        <Overview />
        <Transactions />
        <Footer />
        </div>
      </div>
    </div>

  );
}

export default App;
