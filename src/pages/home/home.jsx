import React from 'react';
import StatCompnent from '../../components/statcompnent/statcompnent';
import { ChartContainer, HomeContainer, StatsContainer } from './homeElements';
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from '@mui/icons-material/Delete'
import AppCharts from '../../components/charts/appcharts';

const sx= {
    fontSize: '30px',
}
const Home = ()=>{
return (
    <HomeContainer>
        <StatsContainer>
            <StatCompnent title='TOTAL ETUDIANT' count={`2456`} text={`Université de Kinshasa`} icon={<MailIcon sx={sx}/>}/>
            <StatCompnent title='TOTAL FRAIS' count={`500`} paie ='paiement' text={`Université de Kinshasa`} icon={<DeleteIcon sx={sx}/>}/>
            <StatCompnent title='UTILISATEURS' count={`4.000.000`} text={`MyCampa users`} icon={<MailIcon sx={sx}/>} />
        </StatsContainer>
        <ChartContainer>
            <AppCharts/>
        </ChartContainer>
    </HomeContainer>
)
}

export default Home;