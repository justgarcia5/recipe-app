import React from 'react';

const NavBar = props => {
  let { current_user } = props
  console.log(props)
  return (
    <div className='NavBar'>
      <ul >
        {current_user &&
          <React.Fragment>
            <a href='/' className='NavBar-home'> <li><b>RecipeApp</b></li></a>
            <div className='navbar-right'>
              <li><b>Welcome <i>{current_user.username}</i></b></li>
              <li><a href='/members/favorites'><b>Favorites</b></a></li>
              <li><a href="/users/sign_out" rel="nofollow" data-method="delete"><b>Sign Out</b></a></li>
              <li><a href='/users/edit'><b>Edit User</b></a></li>
            </div>
          </React.Fragment>
        }
        {!current_user &&
          <React.Fragment>
            <a href='/' className='NavBar-home'> <li><b>RecipeApp</b></li></a>
            <div className='navbar-right'>
              <a href="/users/sign_in"><li><b>Login</b></li></a>
              <a href="/users/sign_up"><li><b>Sign up</b></li></a>
            </div>
          </React.Fragment>
        }
      </ul>
    </div>
  )
}

export default NavBar;
