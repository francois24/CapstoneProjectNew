import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../components/Register/Login.css';

function login() {
  return (
    <Form className="formlog">
      <Form.Group className="mb-3 " controlId="formBasicEmail">
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
      <Button variant="danger" type="submit" className="bg-danger rounded-2 border-0 p-2 fs-6 text-light  d-block m-auto w-100">
        Login
      </Button>
    </Form>
  );
}

export default login;