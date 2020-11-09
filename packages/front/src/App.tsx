import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useCookies } from 'react-cookie';
import useStore from './providers/state';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

const App = () => {
  const [cookies, setCookie, login] = useCookies(['nickname']);
  const { user, userToken, setUser } = useStore((state) => state);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('user');
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON);
      setUser(loggedUser);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/">
          <div>
            <Typography>Hello {user?.username}</Typography>
            <Login />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
