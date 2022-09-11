import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/login";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "./reducers/authReducer";
import UserRegister from "./pages/userRegister/userRegister";
import { personne } from "./reducers/personneReducer";

const App = () => {
  const token = useSelector((state) => state.user.acces_token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
    dispatch(personne());
  }, [dispatch]);

  return <div>{!token ? <UserRegister /> : ""}</div>;
};

export default App;
