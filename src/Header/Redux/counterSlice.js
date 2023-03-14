import {createSlice} from  "@reduxjs/toolkit";
import Counter from "../Counter";
export const counterSlice=createSlice({
    name:'language',
    initialState:{
     language:'az'
    },
    reducers:{
     setlanguage:(state,action)=>{
        state.language=action.payload
     }
     
    }


})


export const {setlanguage}=counterSlice.actions

export default counterSlice.reducer