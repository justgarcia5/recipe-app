import React from 'react';

const NavBar = props => {
  let { current_user } = props
  return (
    <div className='NavBar'>
      <ul >
        {current_user &&
          <React.Fragment>
            <a href='/' className='NavBar-home'> <li><b>RecipeApp</b></li></a>
            <a href='/members/favorites'><li><b>Favorites</b></li></a>
            <a href="/users/sign_out" rel="nofollow" data-method="delete"><li className="navi-element sign-out"><b>Sign Out</b></li></a>
          </React.Fragment>
        }
        {!current_user &&
          <React.Fragment>
            <a href='/' className='NavBar-home'> <li><b>RecipeApp</b></li></a>
            <a href="/users/sign_in"><li className="navi-element sign-out"><b>Login</b></li></a>
          </React.Fragment>
        }
      </ul>
    </div>
  )
}

export default NavBar;
