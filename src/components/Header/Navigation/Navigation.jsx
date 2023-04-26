import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import d from './Navigation.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

export const Navigation = ({ isOpen, handleToggleMenu }) => {
  const isAuth = useSelector(selectorIsLoggedIn);
  const location = useLocation();

  const isTablMob = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    isDesktop && handleToggleMenu(false);
  }, [isDesktop, handleToggleMenu]);

  const getActiveClass = ({ isActive }) =>
    clsx(
      !isAuth && d.link,
      !isAuth && isActive && d.active,
      isAuth && isActive && d.authLinkActive,
      isAuth && d.authLink
    );

  return (
    <>
      {!isAuth ? (
        <nav className={d.headerNav}>
          <ul className={clsx(d.headerList)}>
            <li className={d.headerItem}>
              <NavLink className={getActiveClass} state={location} to="/login">
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
          </ul>
        </nav>
      ) : (
        <div
          className={clsx(
            isOpen && isTablMob && d.MobMenuOpen,
            isOpen && !isTablMob && d.MobMenu
          )}
        >
          <nav
            className={clsx(
              !isTablMob && d.headerNav,
              isOpen && isTablMob && d.headerNavOpen
            )}
          >
            <ul
              className={clsx(
                d.headerListAuth,
                isOpen && isTablMob && d.MobMenuListOpen
              )}
            >
              <li className={d.headerItemAuth}>
                <NavLink
                  state={location}
                  to="/plan"
                  className={getActiveClass}
                  onClick={handleToggleMenu}
                >
                  Personal plan
                </NavLink>
              </li>
              <li className={d.headerItemAuth}>
                <NavLink
                  state={location}
                  to="/cash-flow"
                  className={getActiveClass}
                  onClick={handleToggleMenu}
                >
                  Cashflow
                </NavLink>
              </li>
              <li className={d.headerItemAuth}>
                <NavLink
                  state={location}
                  to="/dynamics"
                  className={getActiveClass}
                  onClick={handleToggleMenu}
                >
                  Dynamics
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
