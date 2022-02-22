import React, { useState } from "react";
import { signupUser, signinUser } from "../../reducers/authReducer";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("signin");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const authenticate = () => {
    if (auth === "signin") {
      dispatch(signinUser({ username: email, password }));
    } else {
      dispatch(
        signupUser({
          nom: "inkumbwa",
          postnom: "kbl",
          prenom: "bnrd",
          password,
          password_confirm: `${password}`,
          telephone: "+243819097177",
          email,
          fonction: "administrateur MyCampa",
        })
      );
    }
  };
  return (
    <LoginContainer>
      <TitleContainer>
        <Title color={`#ff8000`} size={48}>
          MyCampa
        </Title>
      </TitleContainer>
      <FormContainer>
        <Title color={`blue`} size={24}>
          Connexion
        </Title>
        <InputContainer>
          <TextField
            id="standard-basic"
            placeholder="votre Email ou Téléphone"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ width: "90%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            id="standard-basic"
            type="password"
            placeholder="votre Mot de passe"
            InputProps={{ disableUnderline: true }}
            variant="standard"
            sx={{ width: "90%" }}
            onChange={(e) => setPassword(e.target.value)}
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
              backgroundColor: "blue",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
              },
            }}
            onClick={() => authenticate()}
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
        <ForgotText>Mot de passe oublié</ForgotText>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
