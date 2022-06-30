import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default characterSlice.reducer;
