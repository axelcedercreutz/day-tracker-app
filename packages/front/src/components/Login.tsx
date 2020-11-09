import React, { useEffect, useState } from 'react';
import { Button, FormControl, TextField, Typography } from '@material-ui/core';
import useStore from '../providers/state';

const Login = () => {
  const { user, login, logout } = useStore((state) => state);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    login(username, password);
    setUsername('');
    setPassword('');
  };

  const onLogout = () => {
    logout();
  };

  return !user ? (
    <div>
      <FormControl>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          required={true}
        />
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required={true}
          type={'password'}
        />
      </FormControl>
      <Button variant={'outlined'} type={'submit'} onClick={() => onLogin()}>
        Login
      </Button>
    </div>
  ) : (
    <Button variant={'outlined'} type={'submit'} onClick={() => onLogout()}>
      Logout
    </Button>
  );
};

export default Login;
