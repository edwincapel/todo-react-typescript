import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const EmptyTodo: React.FC = () => {
  return (
    <Container className="h-75">
        <Row className="h-100 justify-content-center align-items-center">
            <Col md="10" className="h-100 w-100 mt-3 bg-light border rounded d-flex justify-content-center align-items-center">
                <h6>Todo list is Empty !</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default EmptyTodo