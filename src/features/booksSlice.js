import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    category: "all",
    sort: "new",
    data: [],
  },
  reducers: {
    search: (state, action) => {
      action.payload.forEach((item) => state.data.push(item));
    },
    clearSearch: (state) => {
      state.data = [];
      state.category = "all";
      state.sort = "new";
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
    getSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { search, clearSearch, getCategory, getSort } = booksSlice.actions;
export default booksSlice.reducer;
