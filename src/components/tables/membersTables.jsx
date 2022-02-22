import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import MessageDialog from "../dialogs/messageDialog";
import { deleteUser } from "../../reducers/createReducer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#220a37",
    color: "#ff8000",
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MembersTable = ({ data, dispatch }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Noms</StyledTableCell>
            <StyledTableCell>Postnom</StyledTableCell>
            <StyledTableCell>Prenom</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Téléphone</StyledTableCell>
            <StyledTableCell>Rôle</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            ({
              id_utilisateur,
              nom,
              postnom,
              prenom,
              email,
              telephone,
              role,
            }) => {
              return (
                <StyledTableRow key={id_utilisateur}>
                  <StyledTableCell component="th" scope="row">
                    {nom}
                  </StyledTableCell>
                  <StyledTableCell>{postnom}</StyledTableCell>
                  <StyledTableCell>{prenom}</StyledTableCell>
                  <StyledTableCell>{email}</StyledTableCell>
                  <StyledTableCell>{telephone}</StyledTableCell>
                  <StyledTableCell>{role}</StyledTableCell>
                  <StyledTableCell>
                    <div style={{ display: "flex" }}>
                      <Button>
                        <EditIcon />
                      </Button>
                      <MessageDialog
                        deleteMyUser={() =>
                          dispatch(deleteUser(id_utilisateur))
                        }
                      />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              );
            }
          )}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default MembersTable;
