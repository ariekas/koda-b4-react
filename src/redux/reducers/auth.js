import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userLogin: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    authLogout: (state) => {
      state.token = null;
      state.userLogin = null;
    },
  },
});

export const { reducer: authReducers, actions: { setToken, setUserLogin, authLogout } } = auth;
