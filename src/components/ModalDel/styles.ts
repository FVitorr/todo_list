import styled from "styled-components";

import {CloseCircle} from "@styled-icons/evaicons-solid/CloseCircle"

import {Trash} from "@styled-icons/boxicons-regular/Trash"

import {CheckCircleFill} from "@styled-icons/bootstrap/CheckCircleFill"

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
  height:200px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Header = styled.div`
  width:90%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-radius:20px;
  height:40px;
`;

export const Content = styled.div`
  display: flex;
  align-items:center;
  width:90%;
  gap:1rem;
  margin-top:1rem;

`

export const Title = styled.div`
  display:flex;
  gap:1rem;
`

export const ExitButton = styled(CloseCircle)`
  color:red;
  width:25px;
  margin-right:5px;
  :hover{
    transform:scale(1.05);
    cursor: pointer;
  }
`;

export const ExitIcon = styled(CloseCircle)`
  color:red;
  width:25px;
  margin-right:5px;
`;

export const TrashIcon = styled(Trash)`
  color:black;
  width:25px;
  margin-right:5px;
`;

export const Confirm = styled(CheckCircleFill)`
  color:green;
  width:20px;
  margin-right:5px;
`;

export const Button = styled.div`
  margin-top:1rem;
  width:90%;
  display:flex;
  justify-content:end;
  gap:0.5rem;
  >button{
    display:flex;
    align-items:center;
    height:28px;
    width:70px;
  }
  :hover{
      cursor: pointer;
    }
`;