import './App.css';

import React, { useEffect, useState } from 'react';
//import the created components 
import TransactionForm  from './components/TransactionForm';
import Search from './components/Search';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([])

  // Fetch data from the public API using useEffect

  useEffect (()=> {
    fetch ("https://my-json-server.typicode.com/Jentrix-2024/Bank-of-Flatiron-wk1/transactions")
      .then ((r)=> r.json ())
      .then ((data)=> setTransactions(data))
  }, [])
//update the new array to display
  function updatedTransactions (newData) {
    const updatedTransactionsArray = [...transactions, newData]
    setTransactions (updatedTransactionsArray)
  }
//render the imported components to display on the app
  return (
    <div className="App">
      <Search/><br/>
      <TransactionForm newTransaction = {updatedTransactions}/><br/>
      <TransactionTable arayOfAllTransactions = {transactions}/>
    </div>
  );
}
//export function
export default App;