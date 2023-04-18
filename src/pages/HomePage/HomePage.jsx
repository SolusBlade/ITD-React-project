import Container from 'components/Container/Container';
import s from './HomePage.module.scss';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <Container>
        {!isTablet && (
          <h1 className={s.homeTitle}>
            <span className={s.homeTitleAccent}> Planner</span> for joint
            savings for an apartment
          </h1>
        )}
        {isTablet && (
          <h1 className={s.homeTitle}>
            <span>
              {' '}
              <span className={s.homeTitleAccent}> Planner</span> for joint
            </span>
            savings for an apartment
          </h1>
        )}

        <div className={s.homeImg} />
      </Container>
    </>
  );
};

export default HomePage;
