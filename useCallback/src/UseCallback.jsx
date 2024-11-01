import React, { useCallback, useEffect, useMemo, useState } from 'react'

const UseCallback = () => {
  const [num,setNum] = useState(0);
  const [dark,setDark] = useState(false);
  const [items,setItems] = useState([])

  const style=useMemo(()=>{
    console.log("useMemo-Theme")
    return {
    color:dark?"#ffff":"black",
    backgroundColor:dark?"black":"#ffff",
    }
 },[dark]) 

  const getItems = useCallback(()=>{
    console.log("useMemo-Items")
    return [num*1,num*2,num*3]
 },[num])

 useEffect(()=>{
    setItems(getItems())
 },[getItems])

  return (
    <div className="container" style={style}>
      <input 
      type="number" 
      value={num} 
      onChange={(e)=>setNum(e.target.value)}
      />
      <div className="result">{items.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}</div>
      <button onClick={()=>setDark((Pre)=>!Pre)}>Theme</button>
    </div>
  )
}

export default UseCallback