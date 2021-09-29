import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import * as ROUTES from '../src/constants/routes';
import IsUserRedirect from './helpers/routes';
import { ProtectedRoute } from './helpers/routes';
import Browse from './pages/Browse';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import useAuthListener from './hooks/use-auth-listener';

function App() {
  const user = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
