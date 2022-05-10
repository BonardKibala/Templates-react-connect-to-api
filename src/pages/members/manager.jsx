import React from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import MembersTable from "../../components/tables/dataTableGrid";
import { managers } from "../../reducers/managerReducer";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpins from "../../components/loader/loading";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Managers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.manager);
  React.useEffect(() => {
    dispatch(managers());
  });

  return (
    <ClientContainer>
      {data.length > 0 ? (
        <div>
          <Container1>
            <Title>Les Gestionnaires des établissements</Title>
            <Link to="/registerManager">
            <Button
              variant="outlined"
              sx={{ color: "#220a37", border: "1px solid #ff8000" }}
            >
              Ajouter
            </Button>
            </Link>
          </Container1>
          <Container2>
            <MembersTable data={data} dispatch={dispatch} link='/updateManager' />
          </Container2>
        </div>
      ) : (
        <LoadingSpins />
      )}
    </ClientContainer>
  );
};

export default Managers;
