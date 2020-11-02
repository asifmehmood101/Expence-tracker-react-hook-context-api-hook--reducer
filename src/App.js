import React from 'react';
import './App.css';
import Blance from './components/Blance';
import Expence from './components/Expence';
import Header from './components/Header';
import History from './components/History';
import Newtrans from './components/Newtrans';
import {useReducer} from 'react'

export const GlobalContext= React.createContext()

//initState
const initstate={
    Transactions : [] 
}



function reducer(currentState,action){
  switch(action.type){

    case "Delete_Trans":
      return {
        ...currentState,
        Transactions:currentState.Transactions.filter(Transaction => Transaction.id !== action.payload)

      }

      case "ADD_Trans":
        return{
          ...currentState,
          Transactions:[action.payload,...currentState.Transactions]
        }


      default:
        return currentState

  }
}

//Create Context



function App() {
  const [state,dispatch]=useReducer(reducer,initstate)


  //action
  function DeleteTrans(id) {
    dispatch({
      type:"Delete_Trans",
      payload:id
    })
  }

  function ADDTrans(Transaction) {
    dispatch({
      type:"ADD_Trans",
      payload:Transaction
    })
  }





  return (
    <GlobalContext.Provider  value={{counttrans:state.Transactions, DeleteTrans,ADDTrans}}>
    <div>
    <Header/>
    <div className="container">
    <Blance/>
    <Expence/>
    <History/>
    <Newtrans/>
    </div>
  </div>
    
    </GlobalContext.Provider>
  );
}

export default App;
