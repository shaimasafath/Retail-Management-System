import React from "react";

const TransactionsTable = ({ data }) => {
  if (!data.length) {
    return <div className="empty-state">No results found.</div>;
  }

  return (
    <table className="transactions-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Region</th>
          <th>Product</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Final Amount</th>
          <th>Payment Method</th>
          <th>Order Status</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.Date ? new Date(row.Date).toLocaleDateString() : ""}</td>
            <td>{row["Customer Name"]}</td>
            <td>{row["Phone Number"]}</td>
            <td>{row["Customer Region"]}</td>
            <td>{row["Product Name"]}</td>
            <td>{row["Product Category"]}</td>
            <td>{row["Quantity"]}</td>
            <td>{row["Final Amount"]}</td>
            <td>{row["Payment Method"]}</td>
            <td>{row["Order Status"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
