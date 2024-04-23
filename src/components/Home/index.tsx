import ModalDel from "../ModalDel";
import ModalEdit from "../ModalEdit";
import { Container, Content, TaskArea, Table, Inputs, Action, Del, Edit, Add,Check,Calendar } from "./styles";
import React, { useState } from "react"; 

const Home = () => {
  // Define isOpen e toggle dentro do componente Home
  const [isDel, setIsDel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);


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
        <ModalDel isOpen={isDel} onClose={() => setIsDel(false)} />
        <ModalEdit isOpen={isEdit} onClose={() => setIsEdit(false)}/>


        <TaskArea>
          <Table>
            <tr>
              <th><Check/></th>
              <th>Nome da Tarefa</th>
              <th><Calendar/>Data</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Levar o lixo</td>
              <td>12/12/2024</td>
              <Action>
                <Del onClick={()=> setIsDel(!isDel)} />
                <Edit onClick={()=> setIsEdit(!isEdit)} />
              </Action>
            </tr>
          </Table>
        </TaskArea>
      </Container>
    </>
  );
};

export default Home;
