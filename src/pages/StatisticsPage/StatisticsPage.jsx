import Container from 'components/Container/Container';
import DateComp from 'components/DateComp/DateComp';

import s from './StatisticsPage.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

const StatisticsPage = () => {
  return (
    <>
      <section className={s.vectorImg}>
        <Container>
          <div className={s.statWrapp}>
            <div className={s.navWrapper}>
              <div>
                <ul className={s.navThumb}>
                  <li>
                    <NavLink
                      to="transactions"
                      end
                      className={({ isActive }) =>
                        isActive ? s.active : s.link
                      }
                    >
                      Expenses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? s.active : s.link
                      }
                      to="categories"
                    >
                      Categories
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className={s.calendarWrapper}>
                <DateComp />
              </div>
            </div>
            <Outlet />
          </div>
        </Container>
      </section>
    </>
  );
};

export default StatisticsPage;
