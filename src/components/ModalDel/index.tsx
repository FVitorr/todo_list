import React from "react";
import { Container, Header } from "./styles";

const ModalDel = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <>
        <Container>
          {/* Botão para fechar o ModalDel */}
          <Header>
            <button onClick={onClose}>Fechar</button>
          </Header>
          ModalDel
        </Container>
      </>
    );
  } else {
    return null; 
  }
};

export default ModalDel;
