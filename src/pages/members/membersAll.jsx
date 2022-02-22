import React, { useEffect} from "react";
import {
  ClientContainer,
  Container1,
  Container2,
  Title,
} from "./clientsElements";
import FormDialogs from "../../components/dialogs/formDialog";
import MembersTable from "../../components/tables/membersTables";
import { fetchAllUser } from "../../reducers/fetchingReducer";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpins from "../../components/loader/loading";

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

export default AllAdmin;
