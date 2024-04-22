import { Container, Content, TaskArea, Table,Inputs,Action ,Del,Edit,Add } from "./styles";

const Home = ()=>{
  return(<>
  <Container>
    <Content>
      <Inputs>
        <input placeholder="O que você gostaria de fazer ?"></input>
        <input placeholder="When ?" type="date"></input>
        <Add/>
      </Inputs>
    </Content>
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
            <Del/>
            <Edit/>
            <input type="checkbox" />
          </Action>
        </tr>
      </Table>
    </TaskArea>
  </Container>
  </>);
}

export default Home