import React from 'react'
import { Fragment } from 'react';
import { useReducer } from 'react';

const App = () => {
  const Actions ={
    add:"add",
    sub:"sub",
    reset:"reset"
  }
  const initial = {
    count:0
  }
  const [state,Dispach] = useReducer(setSate,initial);
  function setSate(state,action){
    if(action==Actions.add){
      return {count:state.count+1}
    }
    if(action==Actions.sub){
      return {count:state.count-1}
    }
    if(action==Actions.reset){
      return {count:0}
    }
  }
  const HandelClick =(action) =>{
      Dispach(action)
  }
    return (
     <Fragment>
      <div className="conatiner">
       <h1>{`The count is ${state.count}`}</h1>
       <button onClick={()=>HandelClick(Actions.add)}>Increase</button>
       <button onClick={()=>HandelClick(Actions.sub)}>Decrease</button>
       <button onClick={()=>HandelClick(Actions.reset)}>Reset</button>
       </div>
     </Fragment>
  )
}

export default App