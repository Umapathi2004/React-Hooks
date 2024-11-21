import React, { Fragment, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Delete,Reaction } from '../operations/users/UserSlice';
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
                <div className='reaction'>
                  <button name='like' onClick={(e)=>dispatch(Reaction(user.id,e.target.name))}>L {user.reaction.like}</button>
                  <button name='dislike' onClick={(e)=>dispatch(Reaction(user.id,e.target.name))}>D {user.reaction.dislike}</button>
                </div>
            </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Users