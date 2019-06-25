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
  Input
} from 'reactstrap';
import { FaTimes } from 'react-icons/fa';
import EmptyTodo from './components/EmptyTodo';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text:string,
  complete: boolean
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [todo, setTodo] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault()
    if (value=="") {
      console.log("todo item cannot be empty");
    }
    else{
      addTodo(value)
      setValue('')
    }
  }

  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todo, {text, complete: false}]
    setTodo(newTodo)
  }

  const completeTodo = (index: number) => {
    const newTodo: ITodo[] = [...todo]
    newTodo[index].complete = !newTodo[index].complete
    setTodo(newTodo)
  }

  const removeTodo = (index:number): void => {
    const newTodo: ITodo[] = [...todo]
    newTodo.splice(index,1)
    setTodo(newTodo)
  }
  
  return (
    <>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md="6" className="d-flex justify-content-center align-items-center">
            <Form 
              className="w-75"
              onSubmit={handleSubmit}
            >
              <FormGroup>
                <Label for="newTodo">New Todo</Label>
                <Input 
                  type="text" 
                  name="newTodo" 
                  id="newTodo" 
                  placeholder="example: Do laundry"
                  value={value}
                  onChange={ e => setValue(e.target.value)}
                 />
              </FormGroup>
              <Button>Add new item</Button>
            </Form>
          </Col>
          <Col md="6" className="border-left">
            <h2 className="text-center mt-3">My Todo List</h2>
            {
              todo.length > 0 
              ? todo.map(( todo: ITodo, index: number) =>
                  <Container key={index}>
                    <Row className="d-flex justify-content-center align-item-center">
                      <Col md="10">
                        <div className="w-100 bg-light border rounded d-flex align-items-center justify-content-between mb-1" style={{height:"50px"}}>
                          <p
                            className="ml-3 mb-0"
                            style={{textDecoration: todo.complete ? 'line-through': ''}}
                          >
                            {todo.text}
                          </p>
                          <div>
                            <Button
                              size="sm"
                              type='button'
                              onClick={() => completeTodo(index)}
                              className="mr-1"
                            >
                              {todo.complete ? 'Incomplete' : 'Complete'}
                            </Button>
                            <Button
                              type='button'
                              size="sm"
                              onClick={() => removeTodo(index)}
                              className="mr-3"
                            >
                              <FaTimes />
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                )
              : <EmptyTodo />
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
