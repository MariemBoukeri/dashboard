// src/components/Home.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  // Sample data for the schedule
  const scheduleData = [
    { day: 'Monday', courses: ['9:00 AM - 10:00 AM: CS 3100 Data Structures', '10:30 AM - 11:30 AM: MATH 101 Calculus', '1:00 PM - 2:00 PM: PHYS 102 Physics'] },
    { day: 'Tuesday', courses: ['9:00 AM - 10:00 AM: CS 3150 Web Development', '11:00 AM - 12:00 PM: ECON 101 Economics', '2:00 PM - 3:00 PM: CS 2400 Algorithms'] },
    { day: 'Wednesday', courses: ['10:00 AM - 11:00 AM: CS 3100 Data Structures', '1:00 PM - 2:00 PM: PHYS 102 Physics'] },
    { day: 'Thursday', courses: ['9:00 AM - 10:00 AM: CS 3150 Web Development', '11:00 AM - 12:00 PM: MATH 201 Linear Algebra'] },
    { day: 'Friday', courses: ['10:00 AM - 11:00 AM: CS 2400 Algorithms', '1:00 PM - 2:00 PM: ECON 101 Economics'] },
  ];

  // Sample data for the graduation chart
  const graduationData = [
    { name: 'Credits', required: 120, completed: 90, inProgress: 30 },
    { name: 'GPA', target: 3.5, current: 3.6 },
  ];

  return (
    <div className="main-container">
      <h1>University Dashboard</h1>

      {/* Layout with flexbox */}
      <div className="dashboard-container">
        {/* Path to Graduation Progress Chart */}
        <div className="graduation-chart">
          <h3>Path to Graduation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={graduationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#8884d8" />
              <Bar dataKey="inProgress" fill="#82ca9d" />
              <Bar dataKey="required" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Class Schedule */}
        <div className="class-schedule">
          <h3>Class Schedule</h3>
          {scheduleData.map((day) => (
            <div key={day.day} className="schedule-day">
              <h4>{day.day}</h4>
              <ul>
                {day.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Registration Info */}
        <div className="registration-info">
          <h3>Spring Semester Class Registration is Now Open!</h3>
          <p>Don't forget to register for your courses before the deadline. Click the button below to start the registration process.</p>
          <button onClick={() => window.location.href = "/register"}>Register Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
