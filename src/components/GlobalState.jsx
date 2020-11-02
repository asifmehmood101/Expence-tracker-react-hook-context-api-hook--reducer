import React,{useReducer,useContext} from 'react'

//initState
const initstate={
    Transactions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ] 
}

function GlobalState() {
    return (
        <div>
            
        </div>
    )
}

export default GlobalState
