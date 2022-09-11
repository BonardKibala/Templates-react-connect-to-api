import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../reducers/userReducer';
import authReducer from "../reducers/authReducer";
import fetchingReducer from "../reducers/fetchingReducer";
import createReducer from "../reducers/createReducer";
import personneReducer from "../reducers/personneReducer";
import adminReducer from "../reducers/adminReducer";
import managerReducer from "../reducers/managerReducer";
import payListReducer from "../reducers/payListReducer";
import statReducer from "../reducers/statReducer";

export const store = configureStore({
  reducer: {
    user: authReducer,
    create: createReducer,
    fetch: fetchingReducer,
    personne: personneReducer,
    admin: adminReducer,
    manager: managerReducer,
    paylist: payListReducer,
    stat: statReducer,
    // userReducer
  },
});
