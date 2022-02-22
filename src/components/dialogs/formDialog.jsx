import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputContainer, FormDiv, MultilineContainer } from "./dialogsElement";
import TextField from "@mui/material/TextField";
import SelectInput from "../selectInput";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../../reducers/createReducer";
import Alert from "@mui/material/Alert";

const FormDialog = () => {
  const { error, loading, succes } = useSelector((state) => state.create);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.manager);

  const [open, setOpen] = React.useState(false);
  const maxWidth = "md";

  const addAdmin = () => {
    dispatch(createAdmin(data));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = React.useState({
    nom: "",
    postnom: "",
    prenom: "",
    password: "",
    password_confirm: "",
    telephone: "",
    email: "",
    fonction: "",
    admin_role: "",
  });

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{ color: "#220a37", border: "1px solid #ff8000" }}
        onClick={handleClickOpen}
      >
        Ajouter
      </Button>
      <Dialog maxWidth={maxWidth} open={open} sx={{ height: "100vh" }}>
        <DialogTitle>ENREGISTREMENT</DialogTitle>
        <DialogContent>
          <DialogContentText>
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
          </DialogContentText>
          <Box
            component="form"
            sx={{
              display: "flex",
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormDiv>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Nom"
                  required
                  InputProps={{ disableUnderline: true }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      nom: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Postnom"
                  required
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      postnom: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Prenom"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      prenom: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Email"
                  required
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Téléphone"
                  required
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      telephone: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Mot de passe"
                  required
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Confirm MP"
                  required
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password_confirm: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer>
                <SelectInput
                  table={["super-admin", "system_admin","client"]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      admin_role: e.target.value,
                    })
                  }
                  value={data.admin_role}
                />
              </InputContainer>
              <MultilineContainer>
                <TextField
                  id="outlined-multiline-static"
                  label="Description de la personne"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      fonction: e.target.value,
                    })
                  }
                  value={data.fonction}
                  fullWidth
                />
              </MultilineContainer>
            </FormDiv>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Annuler
          </Button>
          <Button onClick={() => addAdmin()} sx={{ color: "green" }}>
            Sauvegarder
          </Button>
        </DialogActions>
        {succes ? handleClose : ""}
      </Dialog>
    </React.Fragment>
  );
};

export default FormDialog;
