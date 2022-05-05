import React, { useEffect } from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import { administrateur } from "../../reducers/adminReducer";
import { useSelector, useDispatch } from "react-redux";
import MembersTable from "../../components/tables/dataTableGrid";
import LoadingSpins from "../../components/loader/loading";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Administrateurs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(administrateur());
  });

  return (
    <ClientContainer>
      {data.length > 0 ? (
        <div>
          <Container1>
            <Title>Les administrateurs</Title>
            <Link to="/registerAdmin">
            <Button
              variant="outlined"
              sx={{ color: "#220a37", border: "1px solid #ff8000" }}
            >
              Ajouter
            </Button>
            </Link>
          </Container1>
          <Container2>
            <MembersTable data={data} dispatch={dispatch} link='/registerAdmin' />
          </Container2>
        </div>
      ) : (
        <LoadingSpins />
      )}
    </ClientContainer>
  );
};

export default Administrateurs;
