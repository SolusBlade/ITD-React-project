import Icon from 'components/Icon/Icon';
import d from './UserBar.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorName } from 'redux/auth/authSelectors';
import { logOutUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const UserBar = ({ handleToggleMenu, isOpen }) => {
  const name = useSelector(selectorName);
  const location = useLocation();
  const dispatch = useDispatch();

  const isTablMob = useMediaQuery({ query: '(max-width: 1279px)' });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={d.btnBox}>
      <button className={d.btnStat}>
        <NavLink state={location} to="/statistics/transactions" className={d.linkStat}>
          <Icon
            name={'icon-diagram'}
            width={'12'}
            height={'12'}
            className={'icon-diagram'}
          />
        </NavLink>
      </button>
      <span className={d.avatarUser}>{name[0].toUpperCase()}</span>
      <button className={d.btnBurger} onClick={handleToggleMenu}>
        {!isOpen ? (
          <Icon
            name={'icon-menu'}
            width={'32'}
            height={'32'}
            className={'icon-menu'}
          />
        ) : (
          <Icon
            name={'icon-close'}
            width={'32'}
            height={'32'}
            className={'icon-close'}
          />
        )}
      </button>
      {(isOpen || !isTablMob) && (
        <button
          onClick={() => {
            dispatch(logOutUser());
          }}
          className={d.btnLogout}
        >
          Log out
          <Icon
            name={'icon-log-out'}
            width={'17'}
            height={'17'}
            className={'icon-log-out'}
          />
        </button>
      )}
    </div>
  );
};
