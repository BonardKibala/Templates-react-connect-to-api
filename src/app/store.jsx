import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../reducers/userReducer';
import authReducer from "../reducers/authReducer";
import fetchingReducer from "../reducers/fetchingReducer";
import createReducer from "../reducers/createReducer";
import clientsReducer from "../reducers/clientsReducer";
import adminReducer from "../reducers/adminReducer";
import managerReducer from "../reducers/managerReducer";

export const store = configureStore({
  reducer: {
    user: authReducer,
    create: createReducer,
    fetch: fetchingReducer,
    client: clientsReducer,
    admin: adminReducer,
    manager:managerReducer
    // userReducer
  },
});