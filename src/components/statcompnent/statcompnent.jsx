import React from "react";
import {
  Block1,
  Count,
  IconContainer,
  StatContainer,
  Text,
  Title,
  TitleDiv,
} from "./statElements";

const StatCompnent = ({ title, count, text, paie,icon }) => {
  return (
    <StatContainer>
      <Block1>
        <TitleDiv>
          <Title>{title}</Title>
          <div style={{display:'flex',marginTop:'-0.8rem',justifyContent:'flex-start'}}> {<Count>{count}</Count>}
          {paie ? <p style={{paddingLeft:'10px',paddingTop:'3px'}}>Etudiants</p> : ""}</div>
        </TitleDiv>
        <IconContainer>
          {icon}
        </IconContainer>
      </Block1>
      <Text>{text}</Text>
    </StatContainer>
  );
};
export default StatCompnent;
