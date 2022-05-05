import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2, fetchUpdateRemove } from "../helpers/fetch2";

const initialState = {
  error: "",
  loading: false,
  succes: "",
  deleteError: "",
  deleteSuccess: "",
};

export const createAdmin = createAsyncThunk("createadmin", async (body) => {
  const result = await fetch2("/user/register/admin", body);
  return result;
});

export const createManager = createAsyncThunk("createmanager", async (body) => {
  const result = await fetch2("/user/register/gestionnaire", body);
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
    [createAdmin.fulfilled]: (
      state,
      { payload: { message, error, sucess } }
    ) => {
      state.loading = false;
      if (error && !message) {
        state.error = error;
        state.succes = "";
      } else if (message && error) {
        state.error = message[0];
        state.succes = "";
      } else {
        state.succes = sucess;
        state.error = "";
      }
    },
    [createAdmin.pending]: (state, action) => {
      state.loading = true;
    },
    [createAdmin.rejected]: (state, action) => {
      state.error =
        "Erreur de connexion, Veuillez vérifier votre connexion ou vos paramètres réseaux";
    },
    [createManager.fulfilled]: (
      state,
      { payload: { message, error, sucess } }
    ) => {
      state.loading = false;
      if (error && !message) {
        state.error = error;
        state.succes = "";
      } else if (message && error) {
        state.error = message[0];
        state.succes = "";
      } else {
        state.succes = sucess;
        state.error = "";
      }
    },
    [createManager.pending]: (state, action) => {
      state.loading = true;
    },
    [createManager.rejected]: (state, action) => {
      state.error =
        "Erreur de connexion, Veuillez vérifier votre connexion ou vos paramètres réseaux";
    },
    [deleteUser.fulfilled]: (state, { payload: { error, sucess } }) => {
      state.loading = false;
      if (error) {
        state.deleteError = error;
        state.deleteSuccess = "";
      } else {
        state.deleteSuccess = sucess;
        state.deleteError = "";
      }
    },
  },
});

export default createReducer.reducer;
