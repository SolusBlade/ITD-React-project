import Container from 'components/Container/Container';
import PlanInputsList from 'components/PlanInputsList/PlanInputsList';
import s from './OwnPlanPage.module.scss';

const OwnPlanPage = () => {
  return (
    <section className={s.vectorImg}>
      <Container>
        <PlanInputsList />
      </Container>
      {/* <div className={s.vectorImg} /> */}
    </section>
  );
};

export default OwnPlanPage;
