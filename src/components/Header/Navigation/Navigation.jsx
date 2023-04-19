import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import d from './Navigation.module.scss';

export const Navigation = () => {

  const isAuth = useSelector(selectorIsLoggedIn);
  const location = useLocation();

  const getActiveClass = ({ isActive }) => clsx(
    !isAuth && d.link, !isAuth && isActive && d.active, 
    isAuth && isActive && d.authLinkActive, isAuth && d.authLink
    );

  return (
    <nav className={d.headerNav}>
      <ul className={d.headerList}>
        {!isAuth ? (
          <>
            <li className={d.headerItem}>
              <NavLink 
                className={getActiveClass} 
                state={location} 
                to="/login"
              >
                Log In
              </NavLink>
            </li>
            <li className={d.headerItem}>
              <NavLink 
                className={getActiveClass} 
                state={location} 
                to="/register"
              >
                Registration
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={d.headerItemAuth}>
              <NavLink
                state={location}
                to="/plan"
                className={getActiveClass}
              >
                Personal plan
              </NavLink>
            </li>
            <li className={d.headerItemAuth}>
              <NavLink
                state={location}
                to="/cash-flow"
                className={getActiveClass}
              >
                Cashflow
              </NavLink>
            </li>
            <li className={d.headerItemAuth}>
              <NavLink
                state={location}
                to="/dynamics"
                className={getActiveClass}
              >
                Dynamics
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
