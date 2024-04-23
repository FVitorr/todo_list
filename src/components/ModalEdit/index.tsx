import React from "react";
import { Container, Header } from "./styles";

const ModalEdit = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <>
        <Container>
          {/* Botão para fechar o modal */}
          <Header>
            <button onClick={onClose}>Fechar</button>
          </Header>
          MODAL
        </Container>
      </>
    );
  } else {
    return null; 
  }
};

export default ModalEdit;
