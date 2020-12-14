import React, { useState } from 'react';
import { provider, auth } from "../firebase";
import { useHistory } from 'react-router-dom';

function Login() {    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const signInWithGoogle = e =>{
        e.preventDefault();
        auth.signInWithPopup(provider).then((res) => {
            console.log(res.user)
            history.push('/')
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                console.log(auth);                
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div>
            <p>Login</p>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                <input type='password' value={password} onChange=
                    {e => setpassword(e.target.value)}/><br></br>
                <button type='submit' onClick={signIn}>
                        Sign In
                </button>
                <button type='submit' onClick={register} >
                        Register
                </button>
            </form>

            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default Login
