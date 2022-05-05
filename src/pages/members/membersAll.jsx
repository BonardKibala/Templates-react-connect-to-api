import React, { useEffect} from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import MembersTable from "../../components/tables/dataTableGrid";
import { fetchAllUser } from "../../reducers/fetchingReducer";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpins from "../../components/loader/loading";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AllAdmin = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(fetchAllUser());
    console.log(data);
  });
  return (
    <ClientContainer>
      {data.length > 0 ? (
        <div>
          <Container1>
            <Title>Tous nos membres</Title>
            <Link to="/RegisterAdmin">
            <Button
              variant="outlined"
              sx={{ color: "#220a37", border: "1px solid #ff8000" }}
            >
              Ajouter
            </Button>
            </Link>
          </Container1>
          <Container2>
            <MembersTable data={data} dispatch={dispatch} link='#'/>
          </Container2>
        </div>
      ) : (
        <LoadingSpins />
      )}
    </ClientContainer>
  );
};

export default AllAdmin;
