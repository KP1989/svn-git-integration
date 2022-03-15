import React, { useState, FC } from 'react';
import './Login.css';
import user from '../assets/user.png';
import PropTypes from 'prop-types';

interface Props {
  setToken: any
}

interface userCredentials {
  username: string;
  password: string;
}

async function loginUser(credentials: userCredentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json());
}

const Login: FC<Props> = ({ setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

async function handleSubmit(e: any) {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log("Token: ", token);
    setToken(token);
  }
  
  return (
    <div className="App">
      <div className="App-header">
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src={user} id="icon" alt="User Icon" className="user-icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={e => setUserName(e.target.value)}/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={e => setPassword(e.target.value)}/>
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
        <div id="formFooter">
          <a className="underlineHover" href="#">Request Brand Bank access</a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;