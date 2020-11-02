import React,{useContext}from 'react'
import {GlobalContext} from '../App'

function Transaction(props) {

    const {DeleteTrans}=useContext(GlobalContext)


    const sign=props.trans.amount < 0 ? "-" : "+"
    return (
        <li className={props.trans.amount < 0 ? "minus":"plus"}>
              {props.trans.text} <span>{sign}${Math.abs(props.trans.amount)}</span><button onClick={()=>DeleteTrans(props.trans.id)} className="delete-btn">x</button>
        </li>
    )
}


 
export default Transaction

