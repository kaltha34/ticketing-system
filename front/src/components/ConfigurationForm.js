import React, { useState } from 'react';
import { configureSystem } from '../services/api';
import './ConfigurationForm.css'; // Import the CSS file

const ConfigurationForm = ({ setConfigured }) => {
  const [config, setConfig] = useState({
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      await configureSystem(config);
      setConfigured(true);
      setSuccessMessage('Configuration saved successfully!');
    } catch (error) {
      console.error('Error configuring the system:', error);
      setError('Failed to configure the system. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="configuration-form-container">
      <div className="form-card">
        <h2 className="form-heading">Configure the Ticketing System</h2>
        <form onSubmit={handleSubmit}>
          {/* Total Tickets */}
          <div className="form-group">
            <label htmlFor="totalTickets" className="form-label">
              Total Tickets
            </label>
            <input
              type="number"
              id="totalTickets"
              name="totalTickets"
              value={config.totalTickets}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter total tickets"
            />
          </div>

          {/* Ticket Release Rate */}
          <div className="form-group">
            <label htmlFor="ticketReleaseRate" className="form-label">
              Ticket Release Rate (per second)
            </label>
            <input
              type="number"
              id="ticketReleaseRate"
              name="ticketReleaseRate"
              value={config.ticketReleaseRate}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter release rate"
            />
          </div>

          {/* Customer Retrieval Rate */}
          <div className="form-group">
            <label htmlFor="customerRetrievalRate" className="form-label">
              Customer Retrieval Rate (per second)
            </label>
            <input
              type="number"
              id="customerRetrievalRate"
              name="customerRetrievalRate"
              value={config.customerRetrievalRate}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter retrieval rate"
            />
          </div>

          {/* Max Ticket Capacity */}
          <div className="form-group">
            <label htmlFor="maxTicketCapacity" className="form-label">
              Max Ticket Capacity
            </label>
            <input
              type="number"
              id="maxTicketCapacity"
              name="maxTicketCapacity"
              value={config.maxTicketCapacity}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter max capacity"
            />
          </div>

          {/* Submit Button */}
          <div className="relative">
            <button
              type="submit"
              className="form-submit-btn"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Configuration'}
            </button>
            {loading && (
              <div className="absolute-loader">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </form>

        {/* Success Message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ConfigurationForm;
