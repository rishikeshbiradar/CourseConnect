import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Comparison_Table = () => {
  const data = [
    { id: 1, name: 'Course A', duration: '3 months', cost: '$300' },
    { id: 2, name: 'Course B', duration: '4 months', cost: '$400' },
    { id: 3, name: 'Course C', duration: '2 months', cost: '$250' },
    // Add more data as needed
  ];

  return (
    <div className="container mt-5">
          <h2 className="text-center mb-4">Sample Table</h2>
          <div>
       
      <table className="table table-bordered" style={{fontSize:"20px",textAlign:"center"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.duration}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.duration}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
    </div>
  );
};

export default Comparison_Table;
