import React,{useContext} from 'react';
import {GlobalContext} from '../App'


function Expence() {

  const {counttrans}=useContext(GlobalContext)

      //get total ammount
      const amount= counttrans.map(Amount=>Amount.amount)

    //filter total incom and total sum
    const income = amount.filter(item => item >0).reduce((acc,item)=>(acc+=item),0).toFixed(2)

    //filter total expence and total all of them

    const expence=(amount.filter(item  => item < 0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2)


    return (
        
    
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expence}</p>
        </div>
      </div>
    )
}

export default Expence
