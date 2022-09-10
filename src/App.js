import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/login";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "./reducers/authReducer";
import UserRegister from "./pages/userRegister/userRegister";

const App = () => {
  const token = useSelector((state) => state.user.acces_token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
  }, [dispatch]);

  return <div>{!token ? <UserRegister /> : <Login />}</div>;
};

export default App;
