import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum = state.sum + action.payload;
    },
  },
});

export const { add } = addSlice.actions;
export default addSlice.reducer;