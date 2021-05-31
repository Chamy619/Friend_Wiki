import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Auth from './hoc/auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Auth(LandingPage, null)} />
          <Route exact path='/register' component={Auth(Register, false)} />
          <Route exact path='/login' component={Auth(Login, false)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
