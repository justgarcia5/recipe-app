import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import NavBar from './NavBar';

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Routes;
