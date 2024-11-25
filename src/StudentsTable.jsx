import React, { useState } from 'react';
import './App.css';

function StudentsTable() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle add student (currently a placeholder function)
  const handleAddStudent = () => {
    alert('Add student functionality goes here!');
  };

  return (
    <div className='table-container'>
      <h3>Student List</h3>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search students..."
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
          onClick={handleAddStudent}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Add Student
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Major</th>
            <th>Year</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {/* Example data rows, you would replace or filter this based on your state */}
          <tr>
            <td>1001</td>
            <td>Alice Johnson</td>
            <td>Computer Science</td>
            <td>Junior</td>
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
            <td>1002</td>
            <td>Bob Smith</td>
            <td>Biology</td>
            <td>Senior</td>
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

export default StudentsTable;
