import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.data.push(...action.payload);
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const {
  reducer: checkoutReducers,
  actions: { addCart },
} = checkout;
