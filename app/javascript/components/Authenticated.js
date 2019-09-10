import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'

import RecipeDetail from '../pages/RecipeDetail';
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import FavoritesDetailPage from '../pages/FavoritesDetailPage'

class Authenticated extends React.Component {
  state = {
    currentUser: this.props.current_user,
    recipes: []
  }

  componentDidMount = () => {
    fetch('/recipes.json')
    .then((response) => response.json())
    .then((recipes) => {
      this.setState({recipes: recipes})
    })
  }

  render() {
    let { currentUser, recipes } = this.state
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
              <Route path='/recipe-detail/:index/:label' exact render={(props) => <RecipeDetail currentUser={currentUser} recipes={recipes} {...props} />} />
              <Route path='/members/favorites' exact render={(props) => <Favorites currentUser={currentUser} {...props} />} />
              <Route path='/members/favorites/detail/:id' exact render={(props) => <FavoritesDetailPage currentUser={currentUser} {...props} />} />
              <Route render={() => <p className='not-found'>Page not found!</p>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Authenticated;
