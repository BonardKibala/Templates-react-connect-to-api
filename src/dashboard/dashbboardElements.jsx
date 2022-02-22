import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Container1 = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top:5rem;

`;
export const SidebarContainer = styled.div`
  width: 20%;
  padding-top: 1rem;
  height: auto;
  position: relative;
`;

export const PagesContainer = styled.div`
  width: 78%;
  padding-top: 1rem;
`;

export const AppbarContainer = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 1000;
`;
