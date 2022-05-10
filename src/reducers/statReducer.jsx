import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";

const initialState = {
  stat: {},
};

export const stats = createAsyncThunk("stats", async () => {
  const result = await fetch3("/user/count", "GET");
  return result;
});

const statReducer = createSlice({
  name: "stat",
  initialState,
  reducers: {},
  extraReducers: {
    [stats.fulfilled]: (state, { payload: { data } }) => {
      state.stat = data;
      console.log(data);
    },
  },
});

export default statReducer.reducer;
