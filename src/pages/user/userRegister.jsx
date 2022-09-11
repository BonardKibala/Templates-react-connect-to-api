import React, { useState } from "react";
import { signupUser } from "../../reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {
  FormContainer,
  InputContainer,
  LoginContainer,
  Title,
  TitleContainer,
  SubmitContainer,
  LoaderContainer,
  ForgotText,
} from "../login/loginElements";
import Login from "../login/login";

const UserRegister = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [connexionText, setConnexionText] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const register = () => {
    dispatch(
      signupUser({
        login: login,
        password: password,
        password_confirm: confirmPassword,
      })
    );
  };

  const connexion = () => {
    if (!connexionText) {
      setConnexionText(true);
    } else {
      setConnexionText(false);
    }
  };

  return (
    <>
      {!connexionText ? (
        <LoginContainer>
          <TitleContainer>
            <Title color={`#ff8000`} size={48}>
              Orange Rdc
            </Title>
          </TitleContainer>
          <FormContainer>
            <Title color={`#220a37`} size={24}>
              Création du compte
            </Title>

            <>
              <InputContainer>
                <TextField
                  name="login"
                  label="Login"
                  // InputProps={{ disableUnderline: true }}
                  onChange={(e) => setLogin(e.target.value)}
                  value={login}
                  sx={{ width: "95%" }}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  name="password"
                  label="Mot de passe"
                  id="standard-basic"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  sx={{ width: "95%" }}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  name="confirmPassword"
                  label="Confirmer Mot de passe"
                  id="standard-basic"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  sx={{ width: "95%" }}
                />
              </InputContainer>
              <SubmitContainer>
                <Button
                  variant="contained"
                  sx={{
                    width: "25%",
                    height: "40px",
                    margin: "0 auto",
                    top: "1rem",
                    backgroundColor: "#220a37",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#ff8000",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    register();
                  }}
                >
                  {!loading ? (
                    `Enregistrement`
                  ) : (
                    <LoaderContainer>{` En attente...`}</LoaderContainer>
                  )}
                </Button>
              </SubmitContainer>
              {error && (
                <Alert
                  variant="outlined"
                  severity={
                    error === "Enregistrement effectué avec succès"
                      ? "success"
                      : "error"
                  }
                  sx={{ width: "60%", margin: "0 auto", marginTop: "2rem" }}
                >
                  {error}
                </Alert>
              )}
            </>

            <ForgotText onClick={() => connexion()}>
              {!connexionText ? "Connexion" : ""}
            </ForgotText>
          </FormContainer>
        </LoginContainer>
      ) : (
        <Login />
      )}
    </>
  );
};

export default UserRegister;
