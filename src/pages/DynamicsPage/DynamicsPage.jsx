import { Chart } from "components/Dynamics/Chart";
import { Info } from "components/Dynamics/Info";
import style from './DynamicsPage.module.scss';

const DynamicsPage = () => {
  return <section className={style.section}>
    <Chart/>
    <Info/>
  </section>;
};

export default DynamicsPage;
