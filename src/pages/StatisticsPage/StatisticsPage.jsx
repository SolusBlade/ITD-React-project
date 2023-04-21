import Container from 'components/Container/Container';
import DateComp from 'components/DateComp/DateComp';

import s from './StatisticsPage.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

const StatisticsPage = () => {
  return (
    <>
      <Container>
        <div className={s.navWrapper}>
          <nav>
            <div className={s.navThumb}>
              <li>
                <NavLink
                  to="transactions"
                  end
                  className={({ isActive }) => (isActive ? s.active : s.link)}
                >
                  Expenses
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? s.active : s.link)}
                  to="categories"
                >
                  Categories
                </NavLink>
              </li>
            </div>
          </nav>
          <div className={s.calendarWrapper}>
            <DateComp />
          </div>
        </div>
        <Outlet />
      </Container>
    </>
  );
};

export default StatisticsPage;