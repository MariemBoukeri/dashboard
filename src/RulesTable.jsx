import React, { useState } from 'react';
import './App.css';

function UniversityRules() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle add rule (currently a placeholder function)
  const handleAddRule = () => {
    alert('Add rule functionality goes here!');
  };

  return (
    <div className='table-container'>
      <h3>University Rules</h3>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search rules..."
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
          onClick={handleAddRule}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Add Rule
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rule ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date Issued</th>
            <th>Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {/* Example data rows, replace or filter this based on your state */}
          <tr>
            <td>R001</td>
            <td>Attendance Policy</td>
            <td>Students must maintain at least 75% attendance.</td>
            <td>2024-01-15</td>
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
            <td>R002</td>
            <td>Code of Conduct</td>
            <td>All students must adhere to the code of conduct at all times.</td>
            <td>2023-09-10</td>
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

export default UniversityRules;
