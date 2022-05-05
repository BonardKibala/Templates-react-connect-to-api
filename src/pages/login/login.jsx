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
// import { Formik, Form } from "formik";
// import * as Yup from "yup";

// const INITIAL_FORM_STATE = {
//   email: "",
//   password: "",
// };
// const FORM_VALIDATION = Yup.object().shape({
//   email: Yup.string().email("l'adresse email est invalid").required("Required"),
//   password: Yup.string().required("Champs obligatoire"),
// });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("signin");
  const [forgotPassword, setForgotPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const authenticate = () => {
    if (auth === "signin") {
      dispatch(signinUser({ username: email, password: password }));
    }
  };

  const forgot = () => {
    if (!forgotPassword) {
      setForgotPassword(true);
    } else {
      setForgotPassword(false);
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
        <Title color={`#220a37`} size={24}>
          {!forgotPassword
            ? "Connexion"
            : "Avez-vous oubliez votre mot de passe ?"}
        </Title>
        {/* <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form> */}
        {!forgotPassword ? (
          <>
            <InputContainer>
              <TextField
                name="email"
                label="Nom d'utilisateur"
                // InputProps={{ disableUnderline: true }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                sx={{ width: "95%" }}
              />
            </InputContainer>
            <InputContainer>
              <TextField
                name="password"
                label="Mot de passe"
                id="standard-basic"
                type="password"
                // InputProps={{ disableUnderline: true }}
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
                // error
                name="email"
                label="Adresse e-mail"
                InputProps={{ disableUnderline: true }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                sx={{ width: "95%" }}
              />
            </InputContainer>
            <h5>
              Un message vous sera envoyé dans un instant, Veuillez consultez
              votre boite e-mail
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
        {/* </Form>
        </Formik> */}
        <ForgotText onClick={() => forgot()}>
          {!forgotPassword ? "Mot de passe oublié" : "Connexion"}
        </ForgotText>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
