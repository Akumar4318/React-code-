import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counter/Counter'

export const store=configureStore({

    reducer:{
        counter:counterReducer
    }
})