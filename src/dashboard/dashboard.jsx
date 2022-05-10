import React from "react";
import { MenuAppBar } from "../components/appbar/appbar";
import SidebarMenu from "../components/sidebar/sidebarMenu";
import {
  AppbarContainer,
  Container1,
  DashboardContainer,
  PagesContainer,
  SidebarContainer,
} from "./dashbboardElements";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import AllAdmin from "../pages/members/membersAll";
import Clients from "../pages/members/clients";
import Administrateurs from "../pages/members/admin";
import Managers from "../pages/members/manager";
import RegisterAdminForm from "../pages/Form/registerAdminForm";
import RegisterManagerForm from "../pages/Form/registerManagerForm";
import UpdateAdminForm from "../pages/Form/updateAdmin";
import PayPage from "../pages/pay/pay";
import UpdateManagerForm from "../pages/Form/updateManager";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <AppbarContainer>
        <MenuAppBar />
      </AppbarContainer>

      <Container1>
        <SidebarContainer>
          <SidebarMenu />
        </SidebarContainer>
        <PagesContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/members" component={AllAdmin} />
            <Route path="/clients" component={Clients} />
            <Route path="/admins" component={Administrateurs} />
            <Route path="/managers" component={Managers} />
            <Route path="/registerAdmin" component={RegisterAdminForm} />
            <Route path="/registerManager" component={RegisterManagerForm} />
            <Route path="/updateAdmin/:id" component={UpdateAdminForm} />
            <Route path="/updateManager/:id" component={UpdateManagerForm} />
            <Route path="/paylist" component={PayPage} />
          </Switch>
        </PagesContainer>
      </Container1>
    </DashboardContainer>
  );
};

export default Dashboard;
