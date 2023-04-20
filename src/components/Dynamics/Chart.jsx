import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { dataArr } from "./variables";
// import { faker } from '@faker-js/faker';
import { useRef, useEffect } from "react";
import style from "./Chart.module.scss";
import { options } from "services/dynamics/chartOptions";
import { data } from 'services/dynamics/chartData';
import { useSelector, useDispatch } from "react-redux";
import { getDynamics } from "redux/dynamics/operations";
import { selectDynamics } from "redux/dynamics/variables";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title);

// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const Chart = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const dynamics = useSelector(selectDynamics);
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      console.log('ChartJS', chart);
      dispatch(getDynamics());
    }
    // console.log()
  }, [dispatch]);

  return (
    <div>
      <h1 className={style.title}>Dynamics of expenses and savings</h1>
      <ul className={style.list}>
        <li className={style.listItem}>Accumulated</li>
        <li className={style.listItem}>Expenses</li>
        <li className={style.listItem}>Income</li>
        {/* <Doughnut  options={options} data={data} /> */}
      </ul>
      <div className={style.barContainer}>
        <Bar ref={chartRef} options={options} data={data} height={'100%'} />
      </div>

      <div className={style.statContainer}>
        <div className={style.select}>
          <p>select month</p>
        </div>
        <ul className={style.statList}>
          <li className={style.statListItem}>
            <p className={style.itemTitle}>Income, &#8372;</p>
            <p className={style.itemNum}>60 000</p>
          </li>
          <li className={style.statListItem}>
            <p className={style.itemTitle}>Expenses, &#8372;</p>
            <p className={style.itemNum}>30 000</p>
          </li>
          <li className={style.statListItem}>
            <p className={style.itemTitle}>Accumulated, &#8372;</p>
            <p className={style.itemNum}>30 000</p>
          </li>
          <li className={style.statListItem}>
            <p className={style.itemTitle}>Plan, &#8372;</p>
            <p className={style.itemNum}>45 000</p>
          </li>
          <li className={style.statListItem}>
            <p className={style.itemTitle}>Plan, %</p>
            <p className={style.itemNum}>45 000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}