/* eslint-disable */
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailsAddress, setEmailsAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailsAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login - Finstagram';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <p>Hello world</p>
        </div>
    );
}