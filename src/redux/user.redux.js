import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userData",
  initialState: {
    name: "Adebisi",
    height: "178cm",
    year: "2010",
  },
  reducers: {
    addData: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default user.reducer;
export const { addData } = user.actions;
