import Container from 'components/Container/Container';
import PlanInputsList from 'components/PlanInputsList/PlanInputsList';
import s from './OwnPlanPage.module.scss';

const OwnPlanPage = () => {
  return (
    <Container>
      <PlanInputsList />

      <div className={s.vectorImg} />
    </Container>
  );
};

export default OwnPlanPage;
