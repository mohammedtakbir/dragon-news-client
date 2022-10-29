import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';

const SignUp = () => {
    useTitle('Sign up')
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        //* create an user
        createUser(email, password)
            .then(res => {
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                handleVerifyEmail();
                toast.success('please verify your email before login.');
                console.log(res.user)
            })
            .catch(err => {
                setError(err.message);
                console.error(err)
            }
            )
    };
    const handleCheckbox = (e) => {
        setAccepted(e.target.checked)
    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    };
    const handleVerifyEmail = () => {
        verifyEmail()
        .then(() => {})
        .catch(err => console.error(err))
    }
    return (
        <div>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                </Form.Group>

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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleCheckbox}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'>Terms & Condition</Link></>}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Signup
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;