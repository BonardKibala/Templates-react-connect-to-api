import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";

const initialState = [];

export const administrateur = createAsyncThunk("administrateur", async () => {
  const result = await fetch3("/user/admins", "GET");
  return result;
});

const adminReducer = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    [administrateur.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default adminReducer.reducer;
