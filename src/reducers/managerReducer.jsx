import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";

const initialState = [];

export const managers = createAsyncThunk("managers", async () => {
  const result = await fetch3("/user/managers", "GET");
  return result;
});

const managerReducer = createSlice({
  name: "manager",
  initialState,
  reducers: {},
  extraReducers: {
    [managers.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default managerReducer.reducer;
