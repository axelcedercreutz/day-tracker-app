import React, { useEffect, useState } from 'react';
import { Button, FormControl, TextField, Typography } from '@material-ui/core';
import useStore from '../providers/state';

const CreateUser = () => {
  const { user, userToken, createUser } = useStore((state) => state);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onCreate = () => {
    createUser(username, password);
  };

  return (
    <div>
      <Typography>Hello New User</Typography>
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
      <Button variant={'outlined'} type={'submit'} onClick={() => onCreate()}>
        Create user
      </Button>
    </div>
  );
};

export default CreateUser;
