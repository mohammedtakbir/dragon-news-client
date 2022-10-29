import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';

const Login = () => {
    useTitle('login');
    const [error, setError] = useState('');
    const { userLogIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //* login an user
        userLogIn(email, password)
            .then(res => {
                setError('');
                if (res.user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.error('verify your email first.')
                }
                console.log(res.user)
            })
            .catch(err => {
                setError(err.message);
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <div>
                    <p className='text-danger'>{error}</p>
                </div>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;