import React from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "../members/clientsElements";
import { payList } from "../../reducers/payListReducer";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpins from "../../components/loader/loading";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PayDataTab from "../../components/tables/payDataTab";

const PayPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.paylist);
  React.useEffect(() => {
    dispatch(payList());
  });

  return (
    <ClientContainer>
      {data.length > 0 ? (
        <div>
          <Container1>
            <Title>Les différents payments Effectués</Title>
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
            <PayDataTab data={data} dispatch={dispatch} link='/updateAdmin' />
          </Container2>
        </div>
      ) : (
        <LoadingSpins />
      )}
    </ClientContainer>
  );
};

export default PayPage;
