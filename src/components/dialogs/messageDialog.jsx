import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const MessageDialog = ({ deleteMyUser }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { deleteSuccess } = useSelector((state) => state.create);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: "red", fontSize: 20 }} />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{ color: "#220a37" }} id="responsive-dialog-title">
          {"Suppression du client"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "black" }}>
            {"Voulez-vous vraiment supprimer ce client de manière définitive ?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{ color: "red" }}>
            Annuler
          </Button>
          <Button onClick={deleteMyUser} autoFocus sx={{ color: "#220a37" }}>
            Supprimer
          </Button>
        </DialogActions>
        {deleteSuccess ? handleClose : ""}
      </Dialog>
    </div>
  );
};
export default MessageDialog;
