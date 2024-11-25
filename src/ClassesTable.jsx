import React, { useState } from 'react';
import './App.css';

function ClassesTiming() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle add class (currently a placeholder function)
  const handleAddClass = () => {
    alert('Add class functionality goes here!');
  };

  return (
    <div className='table-container'>
      <h3>Classes Timing</h3>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search classes..."
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
          onClick={handleAddClass}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Add Class
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Class ID</th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Time</th>
            <th>Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {/* Example data rows, replace or filter this based on your state */}
          <tr>
            <td>2001</td>
            <td>Mathematics 101</td>
            <td>Dr. Smith</td>
            <td>09:00 AM - 10:30 AM</td>
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
            <td>2002</td>
            <td>Physics 201</td>
            <td>Prof. Johnson</td>
            <td>11:00 AM - 12:30 PM</td>
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

export default ClassesTiming;
