import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Snackbar, AppBar, Toolbar, Button } from '@material-ui/core';
import { useCookies } from 'react-cookie';
import useStore from './providers/state';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import CalendarView from './components/CalendarView';

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

  const Headerbar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Login />
          <Button color="inherit">Add new entry</Button>
          <Button color="inherit">Stats</Button>
        </Toolbar>
      </AppBar>
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/">
          <div>
            {user ? (
              <div>
                {Headerbar()}
                <CalendarView />
              </div>
            ) : (
              <Login />
            )}
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
