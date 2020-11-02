import React,{useState,useContext} from 'react'
import {GlobalContext} from '../App'


function Newtrans() {

    const {ADDTrans}=useContext(GlobalContext)

    const [text,settext]=useState("")
    const [amount,setamount]=useState(0)

    //Title event for tranc title
    function title(e){
        const valueEvent=e.target.value;

        settext(valueEvent)

    }

    function transEvent(e){
        const valueevent=e.target.value
        setamount(valueevent)
    }

    function TransSubmit(e){

      e.preventDefault();

      const newTransaction={
        id: Math.floor(Math.random()*1000),
        text,
        amount: +amount
      }

      ADDTrans(newTransaction)

      e.target.reset({
        text:" ",
        amount:0
      })

    }

    return (
        <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={TransSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={title} id="text" placeholder="Enter text..."  required/>
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={transEvent} id="amount" placeholder="Enter amount..."  required/>
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    )
}

export default Newtrans
