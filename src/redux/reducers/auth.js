import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: [],
  userLogin: null
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRegister: (state, action) => {
      state.dataUser.push(action.payload);
    },
    authLogin: (state, action) => {
        state.userLogin = action.payload
    },
    authLogout: (state, action) => {
      state.userLogin = action.payload
    }
  },
});

export const {reducer: authReducers, actions: { authRegister, authLogin, authLogout } } = auth;
