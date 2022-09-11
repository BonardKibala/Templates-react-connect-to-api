import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  width: 45%;
  background:#220a37;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 30%;
  text-align: center;
  padding-top: 18rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 45%;
    padding-top: 0.1rem;
  }
`;
export const TableContainer = styled.div`
  width: 60%;
  background:black;
  padding-left:5px;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 45%;
    padding-top: 0.1rem;
  }
`;
export const Title = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-weight: 900;
`;
export const FormContainer = styled.div`
  width: 55%;
  background: white;
  text-align: center;
  padding-top: 9rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 55%;
  }
`;
export const RegisterStudentContainer = styled.div`
  width: 40%;
  background: white;
  text-align: center;
  padding-top: 9rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 55%;
  }
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 4.5rem;
  // border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items:center;
`;
export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LoaderContainer = styled.div``;
export const ForgotText = styled.p`
  margin-top: 2rem;
  margin-left: 15rem;
  &:hover {
    color: #220a37;
    cursor: pointer;
    font-weight:bold;
  }
`;
