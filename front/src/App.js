import React, { useState } from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import ConfigurationForm from './components/ConfigurationForm';
import ControlPanel from './components/ControlPanel';
import TicketList from './components/TicketList';

const App = () => {
  const [isConfigured, setIsConfigured] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Add Header at the top */}
      <Header />

      {/* Main Content */}
      <main className="container mt-4 flex-grow-1">
        <ConfigurationForm setConfigured={setIsConfigured} />
        <ControlPanel isConfigured={isConfigured} />
        <TicketList />
      </main>

      {/* Add Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
