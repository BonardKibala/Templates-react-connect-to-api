import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {
  RegisterStudentContainer,
  InputContainer,
  LoginContainer,
  Title,
  TableContainer,
  SubmitContainer,
  LoaderContainer,
  ForgotText,
} from "../login/loginElements";
import Login from "../login/login";
import DenseTable from "./table";
import { removeToken } from "../../reducers/authReducer";
import { createStudent } from "../../reducers/createStudentReducer";
import { etudiant } from "../../reducers/getStudentReducer";

const StudentRegister = () => {
  const [nom, setNom] = useState("");
  const [postnom, setPostnom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [connexionText, setConnexionText] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.createstudent);
  const etudiants = useSelector((state) => state.etudiant);

  const register = () => {
    dispatch(
      createStudent({
        nom: nom,
        postnom: postnom,
        prenom: prenom,
      })
    );
  };
   
  React.useEffect(() => {
    dispatch(etudiant());
  }, [dispatch]);

  const logout = () => {
    dispatch(removeToken());
  };

  return (
    <>
      {!connexionText ? (
        <LoginContainer>
          <TableContainer>
            <DenseTable datas={etudiants} />
          </TableContainer>
          <RegisterStudentContainer>
            <Title color={`#220a37`} size={24}>
              {!connexionText ? "Enregistrement des étudiants" : ""}
            </Title>
            <>
              <InputContainer>
                <TextField
                  name="nom"
                  label="Nom"
                  type="text"
                  // InputProps={{ disableUnderline: true }}
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                  sx={{ width: "95%" }}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  name="postnom"
                  label="Postnom"
                  id="standard-basic"
                  type="text"
                  onChange={(e) => setPostnom(e.target.value)}
                  value={postnom}
                  sx={{ width: "95%" }}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  name="prenom"
                  label="Penom"
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
                    error === "Etudiant Enregistrer avec succès"
                      ? "success"
                      : "error"
                  }
                  sx={{ width: "60%", margin: "0 auto", marginTop: "2rem" }}
                >
                  {error}
                </Alert>
              )}
            </>
            <ForgotText onClick={() => logout()}>
              {!connexionText ? "Déconnexion" : "Déconnexion"}
            </ForgotText>
          </RegisterStudentContainer>
        </LoginContainer>
      ) : (
        <Login />
      )}
    </>
  );
};

export default StudentRegister;
