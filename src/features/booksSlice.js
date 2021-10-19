import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    category: "all",
    sort: "newest",
    data: [],
  },
  reducers: {
    search: (state, action) => {
      action.payload.forEach((item) => state.data.push(item));
    },
    clearSearch: (state) => {
      state.data = [];
      state.category = "all";
      state.sort = "newest";
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { search, clearSearch, setCategory, setSort } = booksSlice.actions;
export default booksSlice.reducer;
