import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store: any) => store.errors);
  const dispatch = useDispatch();

  const login = (event: any) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
          <h2 style={{ margin: "5px", fontSize: "35px", textShadow: "2px 2px 2px gray"}}>Login</h2>
          <div style={{ height: "25px", width: "100%"}}>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
</div>
      <div>
        <label htmlFor="username">
          <TextField
          margin="dense"
          variant="standard"
            type="text"
            name="username"
            label="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <TextField
          margin="dense"
          variant="standard"
            type="password"
            name="password"
            label="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
