import { createStore } from "redux";
import {createSlice,configureStore} from "@reduxjs/toolkit"


const initialCounterState = {counter:0,showCounter:true,isAuthenticated:false};

const counterSlice = createSlice({
    name: 'counter',
    initialState:initialCounterState,
    reducers: {
        login(){

        },
        increment(state,action){
           state.counter=state.counter+action.payload;
        },
        decrement(state){
            state.counter--;
         },
         toggleCounter(state){
             state.showCounter=!state.showCounter;
         }


    }
})


export const counterActions = counterSlice.actions;
export default counterSlice.reducer;