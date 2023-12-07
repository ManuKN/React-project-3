import React from 'react';
import './Content6.css';

function Content6() {
  return (
    <div className='containers'>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>25</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>30</td>
            <td>jane@example.com</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Content6;
