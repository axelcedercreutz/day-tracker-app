import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import CreateUser from './components/CreateUser';

const App = () => {
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
