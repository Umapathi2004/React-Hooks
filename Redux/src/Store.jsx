import {configureStore} from "@reduxjs/toolkit"
import  counterSlice  from "./operations/counter/counter"
import  userSlice  from "./operations/users/UserSlice"
export const store = configureStore({
    reducer:{
        counter:counterSlice,
        users:userSlice,
    }
})