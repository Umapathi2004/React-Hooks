import React, { Fragment, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByNum,reset } from './operations/counter/counter'
const Counter = () => {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()

  const [num,setNum] = useState(0);
  const AddNum = () =>{
    dispatch(incrementByNum(Number(num) || 0))
  }
  return (
    <Fragment>
    <div style={{display:"flex",gap:"20px",fontSize:"2em"}}>
      <button onClick={()=>dispatch(increment())} style={{fontSize:"1em"}}>+</button>
      <div>{count}</div>
      <button onClick={()=>dispatch(decrement())} style={{fontSize:"1em"}}>-</button>
    </div>
    <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
    <button onClick={()=>{
      setNum(0)
      dispatch(reset())
    }}>Reset</button>
    <button onClick={AddNum}>Add Num</button>
    </Fragment>
  )
}

export default Counter