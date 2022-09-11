import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";



export default function DenseTable({ datas }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "2rem", marginLeft: "1rem" }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nom</TableCell>
            <TableCell align="left">Prenom</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas?.map(({ nom, prenom }) => (
            <TableRow key={nom}>
              <TableCell align="left">{nom}</TableCell>
              <TableCell align="left">{prenom}</TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete" sx={{ color: "red" }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
