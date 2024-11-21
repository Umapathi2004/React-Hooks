import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =[
    {   
        id:1,
        name:"Umapathi",
        age:21,
        place:"Gummidipoondi",
        reaction:{
            like:0,
            dislike:0
        },
    },
    {
        id:2,
        name:"Solomon",
        age:23,
        place:"Ponneri",
        reaction:{
            like:0,
            dislike:0
        },
    },
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
                        place,
                        reaction:{
                            like:0,
                            dislike:0
                        },
                    }
                }
            }
        },
        UpdateUser:{
            reducer:(state,action)=>{
                const {id,name,age,place} = action.payload
                return state.map(user=>user.id==id?{...user,name,age,place}:user)
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
        },
        Reaction:{
            reducer:(state,action)=>{
                const {id,reaction} = action.payload;
                const user = state.find((user)=>user.id==id);
                if(user){
                    user.reaction[reaction]++
                }
        },
        prepare:(id,reaction)=>{
            return{
                payload:{
                    id,
                    reaction
                }
        }   
        }
    }
    }
})
export const {AddUser,Delete,UpdateUser,Reaction} = userSlice.actions;
export default userSlice.reducer;