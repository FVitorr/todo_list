import {styled} from "styled-components"

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  max-width: 1000px;
  width:80%;
  height:26vh;
  max-height:300px;
  border-radius:20px 20px 0px 0px;
  /* background-color:  #536094; */
  background: linear-gradient(90deg, rgba(125,123,161,1) 0%, rgba(9,9,121,1) 58%, rgba(0,212,255,1) 100%);
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);

  >h1{
    color: white;
    font-weight:400;
    
  }
`;