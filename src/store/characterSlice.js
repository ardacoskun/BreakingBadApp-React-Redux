import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const characterLimit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const response = await axios(
      `${
        process.env.REACT_APP_API_BASE_URL
      }/characters?limit=${characterLimit}&offset=${page * characterLimit}`
    );
    return response.data;
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.page += 1;
      state.isLoading = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
