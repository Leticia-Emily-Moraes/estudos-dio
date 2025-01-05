import styled from "styled-components";

export const Geral = styled.div`
  background-color:rgb(0, 162, 27);
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  background-color:#ffffff;
  width: 80%;
  height: 50%;
  border-radius: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  border: 1px solid #0000004b;
  height: 25px;
  width: 80%;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const Button = styled.button`
  background-color: #00cd74;
  color: #ffffff;
  border: none;
  height: 40px;
  width: 85%;
  border-radius: 5px;
`;
