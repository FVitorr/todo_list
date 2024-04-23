import React from "react";
import { Container, Header, Content,Exit,TaskIcon,Title,Confirm,Button } from "./styles";

const data = "12/12/2024";
const description = "Levar o lixo"

const ModalEdit = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <>
        <Container>
          <Header>
            <Title>
              <TaskIcon/>
              <h5>Editar Tarefa</h5>
            </Title>
            <Exit onClick={onClose}/>
          </Header>
          <Content>
            <input type="text" placeholder={description}></input>
            <input type="date" placeholder={data}></input>
          </Content>
          <Button><button><Confirm/>Salvar</button></Button>
        </Container>
      </>
    );
  } else {
    return null; 
  }
};

export default ModalEdit;
