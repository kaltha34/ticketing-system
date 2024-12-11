import React, { useState } from 'react';
import { startSystem, stopSystem } from '../services/api';
import './ControlPanel.css'; // Import the custom CSS file

const ControlPanel = ({ isConfigured }) => {
  const [loadingStart, setLoadingStart] = useState(false);
  const [loadingStop, setLoadingStop] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleStart = async () => {
    if (!isConfigured) {
      alert('Please configure the system first.');
      return;
    }
    setLoadingStart(true);
    setErrorMessage('');
    try {
      await startSystem();
      alert('System started successfully!');
    } catch (error) {
      console.error('Error starting the system:', error);
      setErrorMessage('Failed to start the system. Please try again.');
    } finally {
      setLoadingStart(false);
    }
  };

  const handleStop = async () => {
    setLoadingStop(true);
    setErrorMessage('');
    try {
      await stopSystem();
      alert('System stopped successfully!');
    } catch (error) {
      console.error('Error stopping the system:', error);
      setErrorMessage('Failed to stop the system. Please try again.');
    } finally {
      setLoadingStop(false);
    }
  };

  return (
    <div className="control-panel-container">
      <h2 className="control-panel-heading">Control Panel</h2>
      <div className="button-group">
        <button
          className={`control-button start-button ${loadingStart ? 'loading' : ''}`}
          onClick={handleStart}
          disabled={loadingStart}
        >
          {loadingStart ? (
            <div className="loader"></div>
          ) : (
            'Start System'
          )}
        </button>
        <button
          className={`control-button stop-button ${loadingStop ? 'loading' : ''}`}
          onClick={handleStop}
          disabled={loadingStop}
        >
          {loadingStop ? (
            <div className="loader"></div>
          ) : (
            'Stop System'
          )}
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ControlPanel;
