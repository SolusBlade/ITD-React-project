import Container from 'components/Container/Container';
import DateComp from 'components/DateComp/DateComp';
import { NavLink, Outlet } from 'react-router-dom';
import s from './StatisticsPage.module.scss';
import Section from 'components/Section/Section';

const StatisticsPage = () => {
  return (
    <Section>
      <Container>
        <div className={s.statWrapp}>
          <div className={s.navWrapper}>
            <div>
              <ul className={s.navThumb}>
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
              </ul>
            </div>
            <div className={s.calendarWrapper}>
              <DateComp />
            </div>

            <Outlet />
          </div>

          <Outlet />
        </div>
      </Container>
    </Section>
  );
};

export default StatisticsPage;
