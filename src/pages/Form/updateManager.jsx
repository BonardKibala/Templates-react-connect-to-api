import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Container,
  Typography,
  Alert,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatedManager } from "../../reducers/createReducer";
import CheckboxWrapper from "../../components/FormUi/checkbox";
import ButtonWrapper from "../../components/FormUi/Button";
import { customizedTextfield } from "../../components/FormUi/Textfield/index";
const INITIAL_FORM_STATE = {
  termsOfService: false,
};
const FORM_VALIDATION = Yup.object().shape({
  termsOfService: Yup.boolean()
    .oneOf([true], "Les conditions doivent être acceptées")
    .required("Les conditions doivent être acceptées"),
});
const UpdateManagerForm = (props) => {
  const { updateManError, loading, updateManSucces } = useSelector(
    (state) => state.create
  );
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    ...props.location.state,
  });

  const manager = {
    ...props.location.state.gestionaireEtab,
  };
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
                if (values.termsOfService) {
                  const body = {
                    nom: data.nom,
                    postnom: data.postnom,
                    prenom: data.prenom,
                    email: data.email,
                    telephone: data.telephone,
                    description: data.gestionaireEtab.description,
                    id_utilisateur: data.id_utilisateur,
                    gestionnaire_id: manager.gestionnaire_id,
                    affectation: data.gestionaireEtab.affectation,
                    grade: data.gestionaireEtab.grade,
                  };
                  await dispatch(updatedManager(body));
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
                      Modifier les infos d'un gestionniare MyCampa
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {updateManSucces ? (
                      <Alert
                        variant="outlined"
                        severity="success"
                        sx={{
                          width: "100%",
                          margin: "0 auto",
                          marginTop: "1rem",
                        }}
                      >
                        {updateManSucces}
                      </Alert>
                    ) : updateManError ? (
                      <Alert
                        variant="outlined"
                        severity="success"
                        sx={{
                          width: "100%",
                          margin: "0 auto",
                          marginTop: "1rem",
                        }}
                      >
                        {updateManError}
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      variant="outlined"
                      label="Nom"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.nom}
                      onChange={(e) =>
                        setData({
                          ...data,
                          nom: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      label="Postnom"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.postnom}
                      onChange={(e) =>
                        setData({
                          ...data,
                          postnom: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      variant="outlined"
                      label="Prenom"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.prenom}
                      onChange={(e) =>
                        setData({
                          ...data,
                          prenom: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Email"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.email}
                      onChange={(e) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      label="Téléphone"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.telephone}
                      onChange={(e) =>
                        setData({
                          ...data,
                          telephone: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Affectation
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Affectation"
                        sx={[{ width: "100%" }, customizedTextfield]}
                        value={data.gestionaireEtab.affectation}
                        onChange={(e) =>
                          setData({
                            ...data,
                            gestionaireEtab: {
                              affectation: e.target.value,
                            },
                          })
                        }
                      >
                        <MenuItem value="Unikin">Unikin</MenuItem>
                        <MenuItem value="UPC">UPC</MenuItem>
                        <MenuItem value="UK">UK</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Grade
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Grade"
                        sx={[{ width: "100%" }, customizedTextfield]}
                        value={data.gestionaireEtab.grade}
                        onChange={(e) =>
                          setData({
                            ...data,
                            gestionaireEtab: {
                              grade: e.target.value,
                            },
                          })
                        }
                      >
                        <MenuItem value="Gestionnaire principal">
                          Gestionnaire principal
                        </MenuItem>
                        <MenuItem value="Gestionnaire">Gestionnaire</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Description"
                      type="text"
                      sx={[{ width: "100%" }, customizedTextfield]}
                      value={data.gestionaireEtab.description}
                      onChange={(e) =>
                        setData({
                          ...data,
                          gestionaireEtab: {
                            description: e.target.value,
                          },
                        })
                      }
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

export default UpdateManagerForm;
