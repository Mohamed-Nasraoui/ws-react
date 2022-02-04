import './App.css';
import {Form, Button,Container,Nav,Navbar,Carousel} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
  <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#catalogue">catalogue</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Carousel>
  <Carousel.Item>
    <img
      className="image"
      src="https://images.unsplash.com/photo-1643482853769-61e53543d18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="https://images.unsplash.com/photo-1632469188022-b5db09a70fbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="https://images.unsplash.com/photo-1639981641409-9830ee35aaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
  
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  );
}

export default App;