import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Button className='w-50 mt-2 mb-2' variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className='text-danger mb-2'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;