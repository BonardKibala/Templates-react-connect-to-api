import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import etudiantReducer from "../reducers/getStudentReducer";
import createStudentReducer from "../reducers/createStudentReducer";

export const store = configureStore({
  reducer: {
    user: authReducer,
    etudiant: etudiantReducer,
    createstudent: createStudentReducer,
  },
});
