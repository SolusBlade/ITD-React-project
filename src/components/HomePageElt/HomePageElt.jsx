import Container from 'components/Container/Container';
import s from './HomePageElt.module.scss';
import { useMediaQuery } from 'react-responsive';
// import { NavLink, useLocation } from 'react-router-dom';

const HomePageElt = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  // const location = useLocation();

  return (
    <Container style={{position: "relative",}}>
      {/* <div className={s.section}> */}
      {/* <NavLink to='/register'state={location}>REGISTER</NavLink>
        <NavLink to='/login' state={location}>LOGIN</NavLink> */}

      {!isTablet && (
        <h1 className={s.homeTitle}>
          <span className={s.homeTitleAccent}> Planner</span> for joint savings
          for an apartment
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
      <div className={s.imgWrap}>
        <div className={s.imgOuterRound}>
          <div className={s.imgRoundWhite} />
          <div className={s.imgRoundGrad} />
          <div className={s.imgInnerRound} />
          <div className={s.homeImg}></div>
          <div className={s.textPaiments}>
            Payments that work  
            <span className={s.textPaimentsAccent}> for you</span>
          </div>
          <div className={s.textAppartments}>
          <span className={s.textPaimentsAccent}> Apartments</span> of your dreams
            
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default HomePageElt;
