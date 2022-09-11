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
} from "../login/loginElements";
import Login from "../login/login";
import DenseTable from "./table";
import { personne } from "../../reducers/personneReducer";

const UserRegister = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [connexionText, setConnexionText] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const personnes = useSelector((state) => state.personne.personnes);


  const register = () => {
    dispatch(
      signupUser({
        nom: nom,
        prenom: prenom,
      })
    );
  };

  return (
    <>
      {!connexionText ? (
        <LoginContainer>
          <TitleContainer>
            <Title color={`#ff8000`} size={48}>
              X-Eyano, Ajouter une personne
            </Title>
          </TitleContainer>
          <FormContainer>
            <Title color={`#220a37`} size={24}>
              {!connexionText ? "Enregistrement" : ""}
            </Title>
            <>
              <InputContainer>
                <TextField
                  name="nom"
                  label="Votre nom"
                  type="text"
                  // InputProps={{ disableUnderline: true }}
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                  sx={{ width: "95%" }}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  name="prenom"
                  label="Votre prenom"
                  id="standard-basic"
                  type="text"
                  onChange={(e) => setPrenom(e.target.value)}
                  value={prenom}
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
            <DenseTable datas={personnes} />
          </FormContainer>
        </LoginContainer>
      ) : (
        <Login />
      )}
    </>
  );
};

export default UserRegister;
