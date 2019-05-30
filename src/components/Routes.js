import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import NavBar from './NavBar';
import RecipeDetail from '../pages/RecipeDetail';

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/recipe-detail' exact component={RecipeDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Routes;
