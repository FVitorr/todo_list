import Modal from "../Modal";
import { Container, Content, TaskArea, Table, Inputs, Action, Del, Edit, Add } from "./styles";
import React, { useState } from "react"; 

const Home = () => {
  // Define isOpen e toggle dentro do componente Home
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // Usa a função 'setIsOpen' para alternar o valor de 'isOpen'
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Content>
          <Inputs>
            <input placeholder="O que você gostaria de fazer ?"></input>
            <input placeholder="When ?" type="date"></input>
            <Add />
          </Inputs>
        </Content>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <TaskArea>
          <Table>
            <tr>
              <th>List</th>
              <th>Data</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Levar o lixo</td>
              <td>12/12/2024</td>
              <Action>
                <Del onClick={()=> setIsOpen(true)} />
                <Edit />
                <input type="checkbox" />
              </Action>
            </tr>
          </Table>
        </TaskArea>
      </Container>
    </>
  );
};

export default Home;
