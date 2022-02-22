import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createManager, fetchManager } from "../../reducers/managerReducer";

const ManagerEtab = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const managers = useSelector((state) => state.manager);

  useEffect(() => {
    dispatch(fetchManager());
  }, []);

  const addManager = () => {
    dispatch(
      createManager({
        nom: "deko",
        postnom: "wembolwa",
        prenom: "emma",
        password,
        password_confirm: `${password}`,
        telephone: "+243819567605",
        email,
        fonction: "gestionnaire MyCampa à l'unikin",
        grade: "admin",
        observation: "ok",
      })
    );
  };
  return (
    <div>
      <h3>Managers Etablissements</h3>
      <br />
      <div>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="btn" onClick={() => addManager()}>
          {" "}
          add
        </button>
      </div>
      <br />
      <div>
        <ul>
          {managers.map(({ gestionnaire_id, grade, observation }) => {
            return <li>{`${gestionnaire_id}, ${grade}, ${observation}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default ManagerEtab;
