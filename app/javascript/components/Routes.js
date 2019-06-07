import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

// import Home from '../pages/Home'
import RecipeDetail from '../pages/RecipeDetail';
import Unauthenticated from './Unauthenticated';
import Authenticated from './Authenticated';

const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Unauthenticated} />
            <Route path='/member' exact component={Authenticated} />
            <Route path='/recipe-detail/:index/:label' exact component={RecipeDetail} />} />
            <Route render={() => <p className='not-found'>Page not found!</p>} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Routes;
