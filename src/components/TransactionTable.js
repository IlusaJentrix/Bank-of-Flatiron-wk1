import React, { useState } from "react";

function Table({ arrayOfAllTransactions }) {
  const [dataOfArray, setDataOfArray] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setDataOfArray(e.target.value);
  }

  const filteredTransactions = arrayOfAllTransactions.filter((item) => {
    return (
      dataOfArray.toLowerCase() === "" ||
      item.description.toLowerCase().includes(dataOfArray)
    );
  });

  const transactionRows = filteredTransactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  ));

  return (
    <>
      <div className="container-fluid mb-4">
        <form onSubmit={handleSubmit} className="d-flex" role="search">
          <input
            onChange={handleChange}
            className="form-control me-2"
            type="search"
            placeholder="Enter description to search... (use lowercase)"
            aria-label="Search"
          />
        </form>
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>{transactionRows}</tbody>
      </table>
      
      <style>
        {`
          .container-fluid {
            max-width: 800px;
          }
          .table {
            font-size: 14px;
          }
          .table td, .table th {
            vertical-align: middle;
            text-align: center;
          }
          .table th {
            font-weight: bold;
          }
          .table tbody tr:hover {
            background-color: #f5f5f5;
          }
        `}
      </style>
    </>
  );
}

export default Table;



