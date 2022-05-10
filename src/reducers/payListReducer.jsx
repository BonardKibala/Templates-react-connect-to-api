import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";

const initialState = [];

export const payList = createAsyncThunk("paylist", async () => {
  const result = await fetch3("/payment/all/payments", "GET");
  return result;
});

const clientReducer = createSlice({
  name: "paylist",
  initialState,
  reducers: {},
  extraReducers: {
    [payList.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default clientReducer.reducer;
