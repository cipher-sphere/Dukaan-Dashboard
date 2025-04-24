import React from 'react';
import Overview from './components/Overview';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Tabletop from './components/Tabletop';
function App() {
  return (
    <div>
      <Topbar/>
      <Overview/>
      <Tabletop/>
      <Footer></Footer>
      </div>
  );
}

export default App;
