import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";
const host = "http://localhost:3000/api";

const initialState = [];

export const personne = createAsyncThunk("personne", async () => {
  const result = await fetch3(`${host}/personne`, "GET");
  return result;
});

const personneReducer = createSlice({
  name: "personne",
  initialState,
  reducers: {},
  extraReducers: {
    [personne.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default personneReducer.reducer;
