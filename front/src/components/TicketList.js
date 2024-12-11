import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TicketList.css'; // Import the CSS file

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="ticket-list-container">
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-title">Ticket CLI</span>
        </div>
        <div className="terminal-body">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading tickets...</p>
            </div>
          ) : (
            <ul className="ticket-list">
              {tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <li key={ticket.id} className="ticket-item">
                    <span className="ticket-id">Ticket {ticket.id}:</span>{' '}
                    <span className="ticket-status">{ticket.status}</span>
                  </li>
                ))
              ) : (
                <p>No tickets found.</p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
