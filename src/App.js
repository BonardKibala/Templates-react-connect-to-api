import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/login";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "./reducers/authReducer";
import { etudiant } from "./reducers/getStudentReducer";
import StudentRegister from "./pages/user/studentRegister";

const App = () => {
  const token = useSelector((state) => state.user.acces_token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
    dispatch(etudiant());
  }, [dispatch]);

  return <div>{!token ? <Login /> : <StudentRegister />}</div>;
};

export default App;
