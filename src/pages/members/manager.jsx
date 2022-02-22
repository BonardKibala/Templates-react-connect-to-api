import React from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import FormDialogs from "../../components/dialogs/formDialog";
import MembersTable from "../../components/tables/membersTables";
import { managers } from "../../reducers/managerReducer";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpins from "../../components/loader/loading";

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

export default Managers;
