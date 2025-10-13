import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import {checkoutReducers} from "./checkout"

const persistAuth ={
    key: "dataUser",
    storage
}
const persistCheckout = {
    key: "dataCheckout",
    storage
}
export const reducer = combineReducers({
    authReducers: persistReducer(persistAuth, authReducers),
    checkoutReducers: persistReducer(persistCheckout, checkoutReducers)
})
