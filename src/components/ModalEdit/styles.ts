import styled from "styled-components";

export const Container=styled.div`
  position: absolute;
  top:40vh;
  bottom:0;
  margin:0 auto;
  background-color: white;
  border-radius:20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
  z-index:1000;

  min-width:55%;
  height:320px;
`;

export const Header = styled.div`
  width:100%;
  border:1px solid black;
  display:flex;
  align-items:end;
  justify-content:end;
  border-radius:20px;
`;