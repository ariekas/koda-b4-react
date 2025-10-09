import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
    reducer,
    middleware: (
        defaultMiddleware) => defaultMiddleware({
          serializableCheck: false
        })
})

export const persistor = persistStore(store)