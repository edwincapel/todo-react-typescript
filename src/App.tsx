import React, { useState } from 'react';
import './App.css';

import {
  Container,
  Row,
  Col,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText
} from 'reactstrap';


interface ITodo {
  text:string,
  complete: boolean
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [todo, setTodo] = useState<ITodo[]>([])

  return (
    <>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md="6" className="d-flex justify-content-center align-items-center">
            <Form className="w-75">
              <FormGroup>
                <Label for="newTodo">New Todo</Label>
                <Input type="text" name="newTodo" id="newTodo" placeholder="add New Item here" />
              </FormGroup>
              <Button>Add new item</Button>
            </Form>
          </Col>
          <Col md="6" className="border-left">
          
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
