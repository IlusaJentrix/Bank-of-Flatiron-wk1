import React, { useState } from "react";

function Form ({newTransaction}) {
    const [formInputData, setFormInputData] = useState ({
        date : "",
        description : "",
        category : "",
        amount : "",
    });

    function onHandleChange (e) {
        const key = e.target.name
          const value = e.target.value
     setFormInputData ({...formInputData, [key]:value})
    }

    //function that alows us to send data to our db.json through POST method

    function handleSubmit (e) {
        e.preventDefault ();

        fetch ("https://my-json-server.typicode.com/Jentrix-2024/Bank-of-Flatiron-wk1/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify (formInputData)
        })
            .then ((resp)=> resp.json ())
            .then ((data)=> newTransaction(data))
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="row p-3">
                <div className="col-3">
                    <input onChange={onHandleChange} name="date" className="form-control form-control-sm" type="date" placeholder="date" aria-label=".form-control-sm example"/>
                </div>
                <div className="col-3">
                    <input onChange={onHandleChange} name="description" className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"/>
                </div>
                <div className="col-3">
                    <input onChange={onHandleChange } name="category" className="form-control form-control-sm" type="text" placeholder="category" aria-label=".form-control-sm example" />
                </div>
                <div className="col-3">
                    <input onChange={onHandleChange} name="amount" className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example" />
                </div>
            </form>
            <button onClick={handleSubmit} type="button" className="btn btn-secondary btn-lg" style={{}}>Add Transactions</button>
        </div>
    )
}

export default Form