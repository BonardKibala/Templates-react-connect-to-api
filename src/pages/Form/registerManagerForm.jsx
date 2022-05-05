import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Container, Typography, Alert } from "@mui/material";
import TextFieldWrapper from "../../components/FormUi/Textfield";
import SelectWrapper from "../../components/FormUi/select";
import grade from "../../grade.json";
import universite from "../../universite.json";
import { useDispatch, useSelector } from "react-redux";
import { createManager } from "../../reducers/createReducer";
import CheckboxWrapper from "../../components/FormUi/checkbox";
import ButtonWrapper from "../../components/FormUi/Button";
const INITIAL_FORM_STATE = {
  nom: "",
  postnom: "",
  prenom: "",
  password: "",
  password_confirm: "",
  telephone: "",
  email: "",
  description: "",
  grade: "",
  affectation: "",
  termsOfService: false,
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FORM_VALIDATION = Yup.object().shape({
  nom: Yup.string().required("Champ Obligatoire"),
  postnom: Yup.string().required("Champ Obligatoire"),
  prenom: Yup.string().required("Champ Obligatoire"),
  password: Yup.string()
    .required("Champ Obligatoire")
    .min(4, "le Mp doit avoir 4 caractères minimum"),
  password_confirm: Yup.string()
    .required("Champ Obligatoire")
    .oneOf([Yup.ref("password"), null], "Les mots de passe sont différents"),
  email: Yup.string().email("Invalid email").required("Champ obligatoire"),
  telephone: Yup.string()
    .matches(phoneRegExp, "Le numéro de tétéphone est invalide")
    .required("Champ obligatoire"),
  description: Yup.string().required("Champ obligatoire"),
  grade: Yup.string().required("Champ obligatoire"),
  affectation: Yup.string().required("Champs obligatoire"),
  termsOfService: Yup.boolean()
    .oneOf([true], "Les conditions doivent être acceptées")
    .required("Les conditions doivent être acceptées"),
});
const RegisterManagerForm = () => {
  const { error, loading, succes } = useSelector((state) => state.create);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "100% !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={async (values) => {
                  console.log(values);
                if (values) {
                  await dispatch(
                    createManager({
                      nom: values.nom,
                      postnom: values.postnom,
                      prenom: values.prenom,
                      password: values.password,
                      password_confirm: values.password_confirm,
                      telephone: values.telephone,
                      email: values.email,
                      description: values.description,
                      grade: values.grade,
                      affectation: values.affectation,
                    })
                  );
                }
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#310039",
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Ajouter un Gestionnaire d'établissements
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {succes ? (
                      <Alert
                        variant="outlined"
                        severity="success"
                        sx={{
                          width: "100%",
                          margin: "0 auto",
                          marginTop: "1rem",
                        }}
                      >
                        {succes}
                      </Alert>
                    ) : error ? (
                      <Alert
                        variant="outlined"
                        severity="error"
                        sx={{
                          width: "100%",
                          margin: "0 auto",
                          marginTop: "1rem",
                        }}
                      >
                        {error}
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextFieldWrapper name="nom" label="Nom" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper name="postnom" label="Postnom" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper name="prenom" label="Prenom" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="email" label="Email" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="telephone" label="Téléphone" />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper
                      name="grade"
                      label="Grade du gestionnaire"
                      options={grade}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper
                      name="affectation"
                      label="Université d'affectation"
                      options={universite}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper
                      name="password"
                      label="Mot de passe"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper
                      name="password_confirm"
                      label="Confirmer votre MP"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name="description"
                      label="Description de l'admin"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <CheckboxWrapper
                      name="termsOfService"
                      legend="Conditions de services"
                      label="J'accepte"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <ButtonWrapper
                      sx={{
                        bgcolor: "#290038",
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 2,
                        alignSelf: "center",
                        width: "100%",
                        "&:hover": {
                          bgcolor: "#290038",
                        },
                      }}
                    >
                      {loading ? "En cours......" : "Enregistrer"}
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterManagerForm;
