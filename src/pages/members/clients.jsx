import React from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import FormDialogs from "../../components/dialogs/formDialog";
import { useSelector, useDispatch } from "react-redux";
import { clients } from "../../reducers/clientsReducer";
import LoadingSpins from "../../components/loader/loading";
import MembersTable from "../../components/tables/membersTables";

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

export default Clients;
