import React from 'react';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Transactions from './components/Transactions';
function App() {
  return (
    <div>
      <Topbar/>
      <Overview/>
      <Transactions></Transactions>
      <Footer></Footer>
      </div>
  );
}

export default App;
