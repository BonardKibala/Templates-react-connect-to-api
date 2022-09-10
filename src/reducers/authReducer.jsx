import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2 } from "../helpers/fetch2";

const initialState = {
  acces_token: "",
  loading: false,
  error: "",
  userlogin: {},
  success: "",
};

export const signupUser = createAsyncThunk("signupuser", async (body) => {
  const result = await fetch2("/user/register", body);
  return result;
});

export const signinUser = createAsyncThunk("signinuser", async (body) => {
  const result = await fetch2("/user/login", body);
  return result;
});

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.acces_token = localStorage.getItem("acces_token");
      const user = localStorage.getItem("user");
      state.userlogin = JSON.parse(user);
    },
    removeToken: (state, action) => {
      state.acces_token = localStorage.removeItem("acces_token");
      state.userlogin = localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (
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
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUser.rejected]: (state, action) => {
      state.error = "Pas de connexion internet";
    },
    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signinUser.fulfilled]: (
      state,
      { payload: { error, acces_token, message, user } }
    ) => {
      state.loading = false;
      if (error && !message) {
        state.error = error;
      } else if (message && error) {
        state.error = message[0];
      } else {
        state.acces_token = acces_token;
        localStorage.setItem("acces_token", acces_token);
        state.userlogin = user;
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
  },
});

export const { addToken, removeToken } = authReducer.actions;

export default authReducer.reducer;
