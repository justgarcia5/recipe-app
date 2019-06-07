import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

import RecipeDetail from '../pages/RecipeDetail';
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'

class Authenticated extends React.Component {
  render() {
    return (
      <div>
        <h1>Authenticated</h1>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/recipe-detail/:index/:label' exact component={RecipeDetail} />
              <Route path='/members/favorites' exact component={Favorites} />
              <Route render={() => <p className='not-found'>Page not found!</p>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Authenticated;
