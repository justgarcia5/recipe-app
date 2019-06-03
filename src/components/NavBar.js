import React from 'react';

const NavBar = () => {
  return (
    <div className='NavBar'>
      {/* <li>
        <a href='/'><h2>RecipeApp</h2></a>
      </li> */}
      <ul >
        <li>
          <a href='/'><b>RecipeApp</b></a>
        </li>
        <li>
          {/* <a href='/about'><b>About</b></a> */}
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
