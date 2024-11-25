import React, { useState } from 'react';
import './App.css';

function UniversityEvents() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle add event (currently a placeholder function)
  const handleAddEvent = () => {
    alert('Add event functionality goes here!');
  };

  return (
    <div className='table-container'>
      <h3>University Events</h3>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: '8px',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleAddEvent}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Add Event
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {/* Example data rows, replace or filter this based on your state */}
          <tr>
            <td>E001</td>
            <td>Orientation Day</td>
            <td>2024-01-10</td>
            <td>Main Auditorium</td>
            <td>
              {/* Icons for update and delete functionality */}
              <button onClick={() => alert('Update functionality')}>
                ✎
              </button>
              <button onClick={() => alert('Delete functionality')} style={{ marginLeft: '8px' }}>
                🗑️
              </button>
            </td>
          </tr>
          <tr>
            <td>E002</td>
            <td>Science Fair</td>
            <td>2024-03-05</td>
            <td>Science Hall</td>
            <td>
              <button onClick={() => alert('Update functionality')}>
                ✎
              </button>
              <button onClick={() => alert('Delete functionality')} style={{ marginLeft: '8px' }}>
                🗑️
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default UniversityEvents;
