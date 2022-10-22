import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleAccepted = (event) => {
        // box theke value nite .value ar check kora kina tarjonno .checked
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Your name" required />
            </Form.Group>

            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="name" name="photoURL" placeholder="Photo url" />
            </Form.Group>

            <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-2 mt-2 w-50" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>terms and condition</Link></>} />
            </Form.Group>

            <Button className='w-50 mt-2 mb-2' variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className='text-danger mb-2'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;