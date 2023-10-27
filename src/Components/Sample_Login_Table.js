import React, { useState, useEffect } from 'react';

function SampleTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5228/api/DSK')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <div><br />
      <h1>Sample Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Number</th>
            </tr>
          </thead>
          <tbody>
            {products.map((user, index) => (
              <tr key={user.id}>
                <td style={tdStyle}>{index.name}</td>
                <td style={tdStyle}>{index.email}</td>
                <td style={tdStyle}>{index.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SampleTable;
