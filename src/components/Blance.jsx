import React,{useContext} from 'react'
import {GlobalContext} from '../App'

function Blance() {

    const {counttrans}=useContext(GlobalContext)
    console.log(counttrans);

    const amount=counttrans.map(tranz=>tranz.amount)
    const total=amount.reduce((acc,items)=>acc+=items,0).toFixed(2)
    return (
        <div>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Blance
