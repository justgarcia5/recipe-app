import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Knife from '../../assets/images/knife2.png'

const NavBar = props => {
  let { current_user } = props
  return (
    <div className='NavBar'>
      <link href="https://fonts.googleapis.com/css?family=Manjari|Monoton&display=swap" rel="stylesheet"></link>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      <ul className='nav-ul'>
        {current_user &&
          <React.Fragment>
            <img src={Knife} className='chef-logo' />
            <a href='/' className='NavBar-home'> <li><b>RecipeApp</b></li></a>
            <div className='navbar-right'>
              <li><b>Welcome <i>{current_user.username}</i></b></li>
              <li><a href='/members/favorites'><b>Favorites</b></a></li>
              <li><a href='/members/blog'><b>Blog</b></a></li>
              <li><a href='/users/edit'><b>Profile</b></a></li>
              <li><a href="/users/sign_out" rel="nofollow" data-method="delete"><b>SignOut</b></a></li>
            </div>
          </React.Fragment>
        }
        {!current_user &&
          <React.Fragment>
            <img src={Knife} className='chef-logo' />
            <a href='/' className='NavBar-home'> <li><b>RecipeApp</b></li></a>
            <div className='navbar-right'>
              <a href="/users/sign_in"><li><b>Login</b></li></a>
              <a href="/users/sign_up"><li><b>SignUp</b></li></a>
            </div>
          </React.Fragment>
        }
      </ul>
    </div>
  )
}

export default NavBar;
