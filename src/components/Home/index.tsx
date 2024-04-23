import React, { useState, useEffect } from "react";
import {Task} from "../../interface/TaskInterface";
import ModalDel from "../ModalDel";
import ModalEdit from "../ModalEdit";
import { Container, Content, TaskArea, Table, Inputs, Action, Del, Edit, Add, Check, Calendar } from "./styles";
import { getAllTasks } from "../../services/TaskService";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDel, setIsDel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleGetData = async () => {
    
    console.log('dsa');
    try {
      const { error, body } = await getAllTasks()
      console.log(body);
      if (!error) {
        setTasks(body);
      } 
    } catch (error) {
      console.log(error);
    }

   
  }
    
  useEffect(() => {handleGetData()},[]);

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
        <ModalEdit isOpen={isEdit} onClose={() => setIsEdit(false)} />

        <TaskArea>
          <Table>
            <thead>
              <tr>
                <th><Check /></th>
                <th>Nome da Tarefa</th>
                <th><Calendar />Data</th>
                <th>Action</th>
              </tr>
            </thead>
            
              {tasks.map(task => (
                <tr key={task.id}>
                  <td><input type="checkbox" /></td>
                  <td>{task.description}</td>
                  <td>{task.data}</td>
                  <Action>
                    <Del onClick={() => setIsDel(!isDel)} />
                    <Edit onClick={() => setIsEdit(!isEdit)} />
                  </Action>
                </tr>
              ))}
            
          </Table>
        </TaskArea>
      </Container>
    </>
  );
};

export default Home;
