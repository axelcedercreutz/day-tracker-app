import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useCookies } from 'react-cookie';
import useStore from './providers/state';
import CreateUser from './components/CreateUser';

const App = () => {
  const [cookies, setCookie] = useCookies(['nickname']);
  const { user, userToken } = useStore((state) => state);

  if (!userToken) {
    const token = cookies.jaynatoken;
    console.log('previous token:', token);
  }
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/">
          <div>
            <Typography>Hello</Typography>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
