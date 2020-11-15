import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../contexts/AuthContexts";
import { Link, useHistory} from 'react-router-dom'; 

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfrimRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfrimRef.current.value) {
        return setError('passwords do no match')
    } 
    try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value);
        history.push("/")
    } catch {
        setError('failed to create account')
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfrimRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
