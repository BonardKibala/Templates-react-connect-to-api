import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetch3 } from "../helpers/fetch2";

const initialState = [];


export const fetchAllUser = createAsyncThunk("fetchalluser", async () => {
  const result = await fetch3("/user", "GET");
  return result;
});

const fetchingReducer = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllUser.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default fetchingReducer.reducer;
