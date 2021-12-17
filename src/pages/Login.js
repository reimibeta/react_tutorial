import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        // http://localhost:8000/api/login
        const response = await fetch('http://d.pcrpallet.com/api/users/user_token/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                name,
                password
            })
        });

        const content = await response.json();
        console.log(response.json());
        setRedirect(true);
        props.setName(content.name);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="text" className="form-control" placeholder="Name" required
                   onChange={e => setName(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
};

export default Login;
