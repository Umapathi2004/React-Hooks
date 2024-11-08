import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =[
    {   
        id:1,
        name:"Umapathi",
        age:21,
        place:"Gummidipoondi"
    },
    {
        id:2,
        name:"Solomon",
        age:23,
        place:"Ponneri"
    }
];

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        AddUser:{
            reducer:(state,action)=>{
                state.push(action.payload)
            },
            prepare:(name,age,place)=>{
                return{
                    payload:{
                        id:nanoid(),
                        name,
                        age,
                        place
                    }
                }
            }
        },
        UpdateUser:{
            reducer:(state,action)=>{
                return state.map(user=>user.id==action.payload.id?action.payload:user)
            },
            prepare:(id,name,age,place)=>{
                return{
                    payload:{
                        id,
                        name,
                        age,
                        place
                    }
                }
            }
        },
        Delete:(state,actiopn)=>{
            return state.filter(user=>user.id !== actiopn.payload)
        }
    }
})
export const {AddUser,Delete,UpdateUser} = userSlice.actions;
export default userSlice.reducer;