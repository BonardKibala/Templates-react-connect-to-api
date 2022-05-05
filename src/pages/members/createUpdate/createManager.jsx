import { Grid, TextField } from "@mui/material";
import React from "react";
import { UpdateContainer } from "./updateElements";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../../../reducers/createReducer";
import Alert from "@mui/material/Alert";

export const customizedTextfield = {
  "& label.Mui-focused": {
    color: "#290038",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#290038",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#290038",
    },
    "&:hover fieldset": {
      borderColor: "#290038",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff8000",
    },
  },
};

const CreateManagers = () => {
  const { error, loading, succes } = useSelector((state) => state.create);
  const dispatch = useDispatch();

  const addAdmin = () => {
    dispatch(createAdmin(data));
  };

  const [data, setData] = React.useState({
    nom: "",
    postnom: "",
    prenom: "",
    password: "",
    password_confirm: "",
    telephone: "",
    email: "",
    description: "",
    admin_role: "",
  });

  return (
    <UpdateContainer>
      <div style={{ paddingTop: 10, paddingBottom: 20, width: "100%" }}>
        <h1 style={{ color: "#310039", fontFamily: "Roboto" }}>
          Ajouter un administrateur d'Etablissement
        </h1>
        {error ? (
          <Alert
            variant="outlined"
            severity="error"
            sx={{ width: "100%", margin: "0 auto", marginTop: "1rem" }}
          >
            {error}
          </Alert>
        ) : (
          ""
        )}
        {succes ? (
          <Alert
            variant="outlined"
            severity="success"
            sx={{ width: "100%", margin: "0 auto", marginTop: "1rem" }}
          >
            {succes}
          </Alert>
        ) : (
          ""
        )}
      </div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <TextField
            required
            variant="outlined"
            label="Nom"
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                nom: e.target.value,
              })
            }
            sx={[{ width: "90%" }, customizedTextfield]}
            helperText={
              data.nom.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="outlined"
            label="Postnom"
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                postnom: e.target.value,
              })
            }
            helperText={
              data.postnom.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            sx={[{ width: "90%" }, customizedTextfield]}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            variant="outlined"
            label="Prenom"
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                prenom: e.target.value,
              })
            }
            helperText={
              data.prenom.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            sx={[{ width: "90%" }, customizedTextfield]}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="outlined"
            label="Email"
            type="email"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            helperText={
              data.email.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            sx={[{ width: "90%" }, customizedTextfield]}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="outlined"
            label="Téléphone"
            type="number"
            onChange={(e) =>
              setData({
                ...data,
                telephone: e.target.value,
              })
            }
            helperText={
              data.telephone.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            sx={[{ width: "90%" }, customizedTextfield]}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="outlined"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            helperText={
              data.password.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            sx={[{ width: "90%" }, customizedTextfield]}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="outlined"
            label="Confirmer MP"
            type="password"
            autoComplete="current-password"
            onChange={(e) =>
              setData({
                ...data,
                password_confirm: e.target.value,
              })
            }
            helperText={
              data.password_confirm.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            sx={[{ width: "90%" }, customizedTextfield]}
          />
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              sx={[{ width: "90%" }, customizedTextfield]}
              onChange={(e) =>
                setData({
                  ...data,
                  admin_role: e.target.value,
                })
              }
              value={data.admin_role}
            >
              <MenuItem value="super-admin">super-admin</MenuItem>
              <MenuItem value="system_admin">system_admin</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-multiline-static"
            label={<p style={{ color: "#310039" }}>Description</p>}
            multiline
            rows={4}
            defaultValue="Description de l'individu"
            sx={[{ width: "90%" }, customizedTextfield]}
            onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
            helperText={
              data.description.length <= 0 ? (
                <p style={{ color: "red" }}>pas de valeur null</p>
              ) : (
                ""
              )
            }
            value={data.description}
          />
        </Grid>

        <Grid item xs={4}>
          <Button
            variant="contained"
            color="success"
            sx={{
              bgcolor: "#290038",
              paddingTop: 1,
              paddingBottom: 1,
              marginTop: 3,
              marginBottom:2,
            }}
            onClick={() => addAdmin()}
          >
            {loading ? "En cours..." : "Enregistrer"}
          </Button>
        </Grid>
      </Grid>
    </UpdateContainer>
  );
};

export default CreateManagers;
