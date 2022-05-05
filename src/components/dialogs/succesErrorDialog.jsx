import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TryOutlined } from "@mui/icons-material";

const SuccesErrorDialog = ({ value, error }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{ color: "#220a37" }} id="responsive-dialog-title">
          {"Il y a erreur bnrd"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "black" }}>
            {"Voulez-vous vraiment supprimer ce client de manière définitive ?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "red" }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SuccesErrorDialog;
