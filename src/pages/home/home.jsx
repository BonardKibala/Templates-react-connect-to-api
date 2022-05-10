import React from "react";
import StatCompnent from "../../components/statcompnent/statcompnent";
import { ChartContainer, HomeContainer, StatsContainer } from "./homeElements";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import AppCharts from "../../components/charts/appcharts";
import { useDispatch, useSelector } from "react-redux";
import { stats } from "../../reducers/statReducer";

const sx = {
  fontSize: "30px",
};
const Home = () => {
  const stat = useSelector((state) => state.stat.stat);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(stats());
  });
  return (
    <HomeContainer>
      {/* {JSON.stringify(stat)} */}
      <StatsContainer>
        <StatCompnent
          title="TOTAL ETUDIANT"
          count={stat.usersCount}
          text={`Université de Kinshasa`}
          icon={<MailIcon sx={sx} />}
        />
        <StatCompnent
          title="TOTAL FRAIS"
          count={`500`}
          paie="paiement"
          text={`Université de Kinshasa`}
          icon={<DeleteIcon sx={sx} />}
        />
        <StatCompnent
          title="UTILISATEURS"
          count={stat.usersCount}
          text={`MyCampa users`}
          icon={<MailIcon sx={sx} />}
        />
      </StatsContainer>
      <ChartContainer>
        <AppCharts />
      </ChartContainer>
    </HomeContainer>
  );
};

export default Home;
