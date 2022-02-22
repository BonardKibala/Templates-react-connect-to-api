import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";

const initialState = [];

export const clients = createAsyncThunk("clients", async () => {
  const result = await fetch3("/user/clients", "GET");
  return result;
});

const clientReducer = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: {
    [clients.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default clientReducer.reducer;
