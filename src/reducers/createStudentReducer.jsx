import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2, fetch3 } from "../helpers/fetch2";
const host = "http://localhost:3000/api";

const initialState = {
  loading: false,
  error: "",
};

export const createStudent = createAsyncThunk("createstudent", async (body) => {
  const result = await fetch2(`${host}/etudiant/register`, body);
  console.log(result);
  return result;
});



const createStudentReducer = createSlice({
  name: "createstudent",
  initialState,
  reducers: {},
  extraReducers: {
    [createStudent.fulfilled]: (
      state,
      { payload: { error, message, success } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else if (message) {
        state.error = message[0];
      } else if (success) {
        state.error = success;
      }
    },
    [createStudent.pending]: (state, action) => {
      state.loading = true;
    },
    [createStudent.rejected]: (state, action) => {
      state.error = "Pas de connexion internet";
    },
  },
});

export default createStudentReducer.reducer;
