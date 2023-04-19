import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import d from './Header.module.scss';
import clsx from 'clsx';
import Container from '../Container/Container';

const getActiveClass = ({ isActive }) => clsx(d.link, isActive && d.active);

const Header = () => {
  return (
    <header className={d.header}>
      <Container>
        <div className={d.divContainer}>
          <span className={d.headerLogo}>
            <Icon name={'logo'} width={'26'} height={'26'} className={'logo'} />
            <p className={d.logoHeaderDes}>Finance</p>
          </span>
          <nav className={d.headerNav}>
            <ul className={d.headerList}>
              <li className={d.headerItem}>
                <NavLink 
                  className={getActiveClass}
                >
                  Log In
                </NavLink>
              </li>
              <li className={d.headerItem}>
                <NavLink 
                  className={getActiveClass}
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
