import './App.css';

import React, { useEffect, useState } from 'react';

import TransactionForm from './components/TransactionForm';
import Search from './components/Search';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([])

  // Fetch data from the the db.json using useEffect

  useEffect (()=> {
    fetch (" https://my-json-server.typicode.com/Jentrix-2024/Bank-of-Flatiron-wk1/transactions")
    

    
      .then ((r)=> r.json ())
      .then ((data)=> setTransactions(data))
  }, [])

  function updatedTransactions (newData) {
    const updatedTransactionsArray = [...transactions, newData]
    setTransactions (updatedTransactionsArray)
  }

  return (
    <div className="App">
      <Search/><br/>
      <TransactionForm newTransaction = {updatedTransactions}/><br/>
      <TransactionTable arayOfAllTransactions = {transactions}/>
    </div>
  );
}

export default App;