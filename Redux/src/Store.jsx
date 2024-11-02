import {configureStore} from "@reduxjs/toolkit"
import  counterSlice  from "./operations/counter/counter"
export const store = configureStore({
    reducer:{
        counter:counterSlice,
    }
})