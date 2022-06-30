import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_URL}/characters?limit=10`
    );
    return await response.data;
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default characterSlice.reducer;
