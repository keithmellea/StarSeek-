import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className="navbar">
      <li className="home">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="seek">
        <NavLink exact to="/spots">
          <button>Seek</button>
        </NavLink>
      </li>
      <li className="auth">{isLoaded && sessionLinks}</li>
    </ul>
  );
}

export default Navigation;
