import Container from 'components/Container/Container';
import s from './HomePageElt.module.scss';
import { useMediaQuery } from 'react-responsive';


const HomePageElt = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Container style={{position: "relative",}}>

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
