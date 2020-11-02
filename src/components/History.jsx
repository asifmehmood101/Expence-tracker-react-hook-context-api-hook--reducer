import React,{useContext} from 'react';
import {GlobalContext} from '../App'
import Transaction from './Transaction';


function History() {

    const {counttrans}=useContext(GlobalContext)

    return (
        <div>
        <h3>History</h3>
            <ul id="list" className="list">
            {counttrans.map(tran =>(
                <Transaction key={tran.id} trans={tran}/>
            ))}
            </ul>
        </div>
    )
}

export default History
