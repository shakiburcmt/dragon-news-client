import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <Form className="d-flex flex-column align-items-center">
            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button className='w-50 mt-2 mb-2' variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;