import {styled} from "styled-components"

import {TrashFill} from "@styled-icons/bootstrap/TrashFill"

import {PencilSquare} from "@styled-icons/bootstrap/PencilSquare"

import {Plus} from "@styled-icons/bootstrap/Plus"

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  max-width: 1000px;
  width:80%;
  border-radius: 0px 0px 20px 20px;
  height:72vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
`;

export const Content = styled.div`
  position:relative;
  z-index: 1;
  top:-20%;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  gap:1rem;
  height:200px;
  max-width:900px;
  width:90%;
  border-radius:20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
  background-color:white;
`;

export const Inputs = styled.div`
display:flex;
justify-content:space-between;
width:90%;
gap: 1rem;
margin: 0 auto;


>input{
  width:45%;
  height:25px;
  padding:0;
  border:none;
  border-bottom:1px solid #1A197F;
  outline:none;
  font-size:14px;

  &:hover{
    cursor: pointer;
}

>button{
  width:5%;
  height:25px;
  border-radius:5px;
}
`;


export const TaskArea = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  position:relative;
  top:-16%;
  height:100%;
  min-width:90%;
  max-height:500px;
  max-width:900px;
  width:90%;
  border-radius:20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
  overflow-y:auto;
  scrollbar-width: none;

  >h3{
    margin-left:1rem;
  }
`;

export const Table = styled.table`
  margin-top:1rem;
  width:90%;
  border-spacing:1rem;
  font-size:14px;
  >tr{
    text-align: left;
    >th:nth-child(2),>th:nth-child(3){
      width:100px;
    }
    >td,th{
      border-bottom:1px solid #1A197F;
      padding-bottom:2px;
    }
  }

`;

export const Action = styled.td`
  display:flex;
  flex-direction:row;
  width:100px;
  gap: 1rem;
  justify-content:space-around;

  >input{
    width: 18px;
    height: 18px;
    vertical-align: middle;

    &:hover{
    transform:scale(1.2);
    cursor: pointer;
  }
  }
`;

export const Del = styled(TrashFill)`
  width:18px;

  &:hover{
    transform:scale(1.2);
    cursor: pointer;
  }
`;


export const Edit = styled(PencilSquare)`
  width:18px;

  &:hover{
    transform:scale(1.2);
    cursor: pointer;
  }
`;

export const Add = styled(Plus)`
  width:26px;
  background-color:whitesmoke;
  border-radius:50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);

  &:hover{
    transform:scale(1.2);
    cursor: pointer;
  }
`;
