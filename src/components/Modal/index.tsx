import React from "react";
import { Container } from "./styles";

const Modal = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <>
        <Container>
          {/* Botão para fechar o modal */}
          <button onClick={onClose}>Fechar</button>
          MODAL
        </Container>
      </>
    );
  } else {
    return null; 
  }
};

export default Modal;
