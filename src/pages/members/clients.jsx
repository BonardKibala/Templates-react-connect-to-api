import React from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import { useSelector, useDispatch } from "react-redux";
import { clients } from "../../reducers/clientsReducer";
import LoadingSpins from "../../components/loader/loading";
import MembersTable from "../../components/tables/dataTableGrid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Clients = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.client);
  React.useEffect(() => {
    dispatch(clients());
  });
  return (
    <ClientContainer>
      {data.length > 0 ? (
        <div>
          <Container1>
            <Title>Nos clients</Title>
            <Link to="/update-member">
            <Button
              variant="outlined"
              sx={{ color: "#220a37", border: "1px solid #ff8000" }}
            >
              Ajouter
            </Button>
            </Link>
          </Container1>
          <Container2>
            <MembersTable data={data} dispatch={dispatch} link='#' />
          </Container2>
        </div>
      ) : (
        <LoadingSpins />
      )}
    </ClientContainer>
  );
};

export default Clients;
