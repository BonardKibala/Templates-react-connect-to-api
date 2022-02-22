import React, { useEffect} from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import FormDialogs from "../../components/dialogs/formDialog";
import { administrateur } from "../../reducers/adminReducer";
import { useSelector, useDispatch } from "react-redux";
import MembersTable from "../../components/tables/membersTables";
import LoadingSpins from "../../components/loader/loading";

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
            <FormDialogs />
          </Container1>
          <Container2>
            <MembersTable data={data} dispatch={dispatch} />
          </Container2>
        </div>
      ) : (
        <LoadingSpins />
      )}
    </ClientContainer>
  );
};

export default Administrateurs;
