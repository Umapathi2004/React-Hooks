import React, { useContext } from 'react'
import {CountProp} from '../App'
const Home = () => {
  const {count,setCount} = useContext(CountProp);
  return (
    <div className="page">
        <h1>Home<button onClick={()=>setCount(pre=>pre+1)}>Click</button></h1>
    </div>
  )
}

export default Home