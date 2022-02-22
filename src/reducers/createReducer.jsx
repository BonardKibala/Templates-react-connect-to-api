import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2, fetchUpdateRemove } from "../helpers/fetch2";

const initialState = {
  error: "",
  loading: false,
  succes:"",
  deleteError: "",
  deleteSuccess:"",
};

export const createAdmin = createAsyncThunk("createadmin", async (body) => {
  const result = await fetch2("/user/register/admin", body);
  return result;
});

export const deleteUser = createAsyncThunk("deleteuser", async (iduser) => {
  const result = await fetchUpdateRemove(`/user/delete/${iduser}`, "DELETE");
  return result;
});

const createReducer = createSlice({
  name: "create",
  initialState,
  reducers: {},
  extraReducers: {
    [createAdmin.fulfilled]: (state, { payload: { message, error, sucess } }) => {
      state.loading = false;
      if (error && !message) {
        state.error = error;
      } else if (message && error) {
        state.error = message[0];
      } else {
        state.succes = sucess
      }
    },
    [deleteUser.fulfilled]: (state, { payload: { error, sucess } }) => {
      state.loading = false;
      if (error) {
        state.deleteError = error;
      } else {
        state.deleteSuccess = sucess
      }
    },
  },
});

export default createReducer.reducer;
