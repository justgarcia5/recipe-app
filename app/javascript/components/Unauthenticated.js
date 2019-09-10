import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

require('dotenv').config()

import RecipeDetail from '../pages/RecipeDetail';
import Home from '../pages/Home'

class Unauthenticated extends React.Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Manjari|Monoton&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Monoton&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Emilys+Candy&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/recipe-detail/:index/:label' exact component={RecipeDetail} />} />
              <Route render={() => <p className='not-found'>Page not found!</p>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Unauthenticated;
