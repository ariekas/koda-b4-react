import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = action.payload;
      const uniqueKey = `${item.id}-${item.size}-${item.temperature}`;
      state.data.push({ ...item, uniqueKey });
    },
    removeCart: (state, action) => {
      state.data = state.data.filter(
        (item) => item.uniqueKey !== action.payload
      );
    },
  },
});

export const {
  reducer: checkoutReducers,
  actions: { addCart, removeCart },
} = checkout;
