import React, { useState } from "react";
import { signinUser } from "../../reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {
  ForgotText,
  FormContainer,
  InputContainer,
  LoginContainer,
  Title,
  TitleContainer,
  SubmitContainer,
  LoaderContainer,
} from "./loginElements";
import UserRegister from "../userRegister/userRegister";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = "signin";
  const [forgotPassword, setForgotPassword] = useState(false);
  const [registerText, setRegisterText] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const authenticate = () => {
    if (auth === "signin") {
      dispatch(signinUser({ username: username, password: password }));
    }
  };

  const forgot = () => {
    if (!forgotPassword) {
      setForgotPassword(true);
    } else {
      setForgotPassword(false);
    }
  };
  const register = () => {
    if (!registerText) {
      setRegisterText(true);
    } else {
      setRegisterText(false);
    }
  };
  return (
    <>
      {!registerText ? (
        <LoginContainer>
          <TitleContainer>
            <Title color={`#ff8000`} size={48}>
              X-Eyano Sarl
            </Title>
          </TitleContainer>
          <FormContainer>
            <Title color={`#220a37`} size={24}>
              {!forgotPassword
                ? "Connexion"
                : "Avez-vous oubliez votre mot de passe ?"}
            </Title>
            {!forgotPassword ? (
              <>
                <InputContainer>
                  <TextField
                    name="username"
                    label="Nom d'utilisateur"
                    // InputProps={{ disableUnderline: true }}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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
                      authenticate();
                    }}
                  >
                    {!loading ? (
                      `Connexion`
                    ) : (
                      <LoaderContainer>{` loading...`}</LoaderContainer>
                    )}
                  </Button>
                </SubmitContainer>
                {error && (
                  <Alert
                    variant="outlined"
                    severity="error"
                    sx={{ width: "60%", margin: "0 auto", marginTop: "2rem" }}
                  >
                    {error}
                  </Alert>
                )}
              </>
            ) : (
              <>
                <InputContainer>
                  <TextField
                    name="username"
                    label="Adresse e-mail"
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    sx={{ width: "95%" }}
                  />
                </InputContainer>
                <h5>
                  Un message vous sera envoyé dans un instant, Veuillez
                  consultez votre boite e-mail
                </h5>
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
                    onClick={() => {}}
                  >
                    {!loading ? (
                      `Envoyer`
                    ) : (
                      <LoaderContainer>{` En attente...`}</LoaderContainer>
                    )}
                  </Button>
                </SubmitContainer>
              </>
            )}
            <ForgotText onClick={() => forgot()}>
              {!forgotPassword ? "Mot de passe oublié" : "Connexion"}
            </ForgotText>
            <ForgotText onClick={() => register()}>
              {!registerText ? "Créer Compte" : ""}
            </ForgotText>
          </FormContainer>
        </LoginContainer>
      ) : (
        <UserRegister />
      )}
    </>
  );
};

export default Login;
