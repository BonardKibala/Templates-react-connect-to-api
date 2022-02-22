import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/login";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "./reducers/authReducer";
import Dashboard from "./dashboard/dashboard";

const App = () => {
  const token = useSelector((state) => state.user.mycampa_token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
  },);

  return <div>{token ? <Dashboard /> : <Login />}</div>;
};

export default App;
