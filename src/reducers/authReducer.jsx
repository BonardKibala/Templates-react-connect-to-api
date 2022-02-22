import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2 } from "../helpers/fetch2";

const initialState = {
  mycampa_token: "",
  loading: false,
  error: "",
};

export const signupUser = createAsyncThunk("signupuser", async (body) => {
  const result = await fetch2("/user/register/admin", body);
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
      state.mycampa_token = localStorage.getItem("mycampa_token");
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload: { error, message } }) => {
      // const {error,message} = payload;
      state.loading = false;
      if (error) {
        state.error = error;
      } else if (message) {
        state.error = message;
      }
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUser.rejected]: (state, action) => {},
    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signinUser.fulfilled]: (
      state,
      { payload: { error, mycampa_token, message } }
    ) => {
      state.loading = false;
      if (error && !message) {
        state.error = error;
      } else if (message && error) {
        state.error = message[0];
      } else {
        state.mycampa_token = mycampa_token;
        localStorage.setItem("mycampa_token", mycampa_token);
      }
    },
  },
});

export const { addToken } = authReducer.actions;

export default authReducer.reducer;
