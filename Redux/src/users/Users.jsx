import React, { Fragment, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Delete } from '../operations/users/UserSlice';
import AddUsers from './AddUsers';
const Users = () => {
  
  const [updated,setUpdated] = useState({})
  const users = [...useSelector((state)=>state.users)].reverse();
  const dispatch = useDispatch();

  return (
    <Fragment>
    <AddUsers updated={updated}/>
    <div className="usercontainer">
        {users.map((user) => (
            <div className="user" key={user.id}>
                <h1>{user.name}</h1>
                <h4>{`${user.age} - ${user.place}`}</h4>
                <div><button onClick={()=>dispatch(Delete(user.id))}>Delete</button>
                <button onClick={()=>setUpdated(user)}>Update</button></div>
            </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Users