import React, { useEffect, useState } from 'react'
import { AddUser,UpdateUser } from '../operations/users/UserSlice'
import { useDispatch } from 'react-redux'
const AddUsers = ({updated}) => {
  const dispatch = useDispatch();
  const [user,setUser] = useState({})
   
  useEffect(()=>{
    setUser(updated)
  },[updated])

  const SetUser =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const Add =()=>{
    (!user.id && user.name && user.age && user.place)?
      dispatch(AddUser(user.name,user.age,user.place)):

   (user.id && user.name && user.age && user)?
      dispatch(UpdateUser(user.id,user.name,user.age,user.place)):"";
    setUser({"name":"","age":"","place":""});
    
  }
  return (
    <div className="container">
        <input type="text" onChange={(e)=>SetUser(e)} autoComplete='off' value={user.name} name="name" placeholder='Name....'/>
        <input type="text" onChange={(e)=>SetUser(e)} autoComplete='off' value={user.age} name="age" placeholder='Age....'/>
        <input type="text" onChange={(e)=>SetUser(e)} autoComplete='off' value={user.place} name="place" placeholder='Place....'/>
        <button onClick={Add}>Submit</button>
    </div>
  )
}

export default AddUsers