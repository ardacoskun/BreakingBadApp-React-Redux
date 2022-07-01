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
    status: "idle",
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.page += 1;
      state.status = "succedeed";

      if (action.payload.length < characterLimit) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
