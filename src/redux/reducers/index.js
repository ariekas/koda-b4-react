import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";

const persistAuth ={
    key: "dataUser",
    storage
}

export const reducer = combineReducers({
    authReducers: persistReducer(persistAuth, authReducers) 
})
