import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'
require('dotenv').config()

import RecipeDetail from '../pages/RecipeDetail';
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'

class Authenticated extends React.Component {
  state = {
    currentUser: this.props.current_user
  }

  render() {
    let { currentUser } = this.state
    const APP_KEY = process.env.REACT_APP_RECIPE_APP_KEY
    const APP_ID = process.env.REACT_APP_RECIPE_APP_ID
    console.log(APP_ID)
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/recipe-detail/:index/:label' exact component={RecipeDetail} />
              <Route path='/members/favorites' exact render={(props) => <Favorites currentUser={currentUser} {...props} />} />
              <Route render={() => <p className='not-found'>Page not found!</p>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Authenticated;
