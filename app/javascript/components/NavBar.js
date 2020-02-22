import React from "react";

import Knife from "../../assets/images/knife2.png";

const NavBar = props => {
  return (
    <div className="NavBar">
      <ul className="nav-ul">
        {props.current_user && (
          <React.Fragment>
            <img src={Knife} className="chef-logo" />
            <a href="/" className="NavBar-home">
              {" "}
              <li>
                <b>RecipeApp</b>
              </li>
            </a>
            <div className="navbar-right">
              <li>
                <b>
                  Welcome <i>{props.current_user.username}</i>
                </b>
              </li>
              <li>
                <a href="/members/favorites">
                  <b>Favorites</b>
                </a>
              </li>
              <li>
                <a href="/members/blogs">
                  <b>Blog</b>
                </a>
              </li>
              <li>
                <a href="/users/edit">
                  <b>Profile</b>
                </a>
              </li>
              <li>
                <a href="/users/sign_out" rel="nofollow" data-method="delete">
                  <b>SignOut</b>
                </a>
              </li>
            </div>
          </React.Fragment>
        )}
        {!props.current_user && (
          <React.Fragment>
            <img src={Knife} className="chef-logo" />
            <a href="/" className="NavBar-home">
              {" "}
              <li>
                <b>RecipeApp</b>
              </li>
            </a>
            <div className="navbar-right">
              <a href="/users/sign_in">
                <li>
                  <b>Login</b>
                </li>
              </a>
              <a href="/users/sign_up">
                <li>
                  <b>SignUp</b>
                </li>
              </a>
            </div>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
