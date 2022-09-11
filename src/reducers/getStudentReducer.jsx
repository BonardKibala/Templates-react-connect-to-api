import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch2";
const host = "http://localhost:3000/api";

const initialState = [];

export const etudiant = createAsyncThunk("etudiant", async () => {
  const result = await fetch3(`${host}/etudiant`, "GET");
  return result;
});

export const removeStudent = createAsyncThunk(
  "removestudent",
  async (etudiantId) => {
    await fetch3(`${host}/etudiant/${etudiantId}`, "DELETE");
    const result = await fetch3(`${host}/etudiant`, "GET");
    return result;
  }
);

const etudiantReducer = createSlice({
  name: "etudiant",
  initialState,
  reducers: {},
  extraReducers: {
    [etudiant.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
    [removeStudent.rejected]: (state, action) => {
      state.error = "Pas de connexion internet";
    },
    [removeStudent.fulfilled]: (state, { payload: { data } }) => {
      return data;
    },
  },
});

export default etudiantReducer.reducer;
