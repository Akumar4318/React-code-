import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({

    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value -=1
        },
        decrementByAmount:(state,action)=>{
                state.value-=Number(action.payload)
            },
        incrementByAmount:(state,action)=>{
            state.value+=Number(action.payload)
        },
        reset:(state)=>{
            state.value=0
        }    
    }
})

export const { incrementByAmount,decrementByAmount,reset,increment,decrement}=counterSlice.actions;
export default counterSlice.reducer
