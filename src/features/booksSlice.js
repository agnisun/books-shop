import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
  },
  reducers: {
    search: (state, action) => {
      action.payload.forEach((item) => state.data.push(item));
    },
    clearSearch: (state) => {
      state.data = [];
    },
    filterCards: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { search, clearSearch, filterCards } = booksSlice.actions;

export default booksSlice.reducer;
