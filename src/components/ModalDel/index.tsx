import React from "react";
import { Container, Header, Content,ExitButton,TrashIcon,Title,Confirm,Button,ExitIcon } from "./styles";

const ModalDel = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <>
        <Container>
          <Header>
            <Title>
              <TrashIcon/>
              <h5>Deletar Tarefa</h5>
            </Title>
            <ExitButton onClick={onClose}/>
          </Header>
          <Content>
            Voce realmente deseja apagar esta Tarefa ?
          </Content>
          <Button>
            <button><Confirm/>Sim</button>
            <button onClick={onClose}><ExitIcon/>Não</button>
          </Button>
        </Container>
      </>
    );
  } else {
    return null; 
  }
};

export default ModalDel;
