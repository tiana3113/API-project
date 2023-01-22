import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='nav-wrapper'>
      <div className='nav-comps'>
        <div className='top-left'>
          <NavLink exact to="/">
            <img className="logo" src='' />
          </NavLink>
        </div>

    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      {isLoaded && (
        <li className='profile-button'>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>


      </div>
    </div>
  );

}

export default Navigation;
