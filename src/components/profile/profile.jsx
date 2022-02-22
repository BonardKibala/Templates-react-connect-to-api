import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateName, updateAge, updateStatus, fetchUserName} from '../../reducers/userReducer';

const Profile = () => {
  const { name, age, status } = useSelector((state) => state);
  const dispatch = useDispatch();
  const updatedAge = (age) => {
    dispatch(updateAge(age));
  };

  const updatedName = () => {
    dispatch(fetchUserName());
    // console.log(fetchUserName())
  };

  const updatedStatus = (staus) => {
    dispatch(updateStatus(staus));
  };

  return (
    <div>
      <h1>i am {name}</h1>
      <h1>i have {age}</h1>
      <h1>My status is {status}</h1>
      <button onClick={() => updatedAge(40)}>update age</button>
      <button onClick={() => updatedName()}>update name</button>
      <button onClick={() => updatedStatus("Developper")}>update status</button>
    </div>
  );
};
export default Profile;
