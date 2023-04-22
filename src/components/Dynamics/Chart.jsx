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
import { useRef, useEffect } from "react";
import style from "./Chart.module.scss";
import { optionsPhone, optionsTablet } from "services/dynamics/chartOptions";
import { data } from 'services/dynamics/chartData';
import { useSelector, useDispatch } from "react-redux";
import { getDynamics } from "redux/dynamics/dynamicsOperations";
// import { useState } from "react";
import { selectDynamics } from "redux/dynamics/dynamicsVariables";
import { selectorIsLoggedIn } from "redux/auth/authSelectors";
import { useMediaQuery } from "react-responsive";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title);

// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const Chart = () => {
  // const matches = useMediaQuery('(min-width: 768px)');
  const matchesTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const dynamics = useSelector(selectDynamics);
  const chartRef = useRef(null);
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  console.log(matchesTablet)
  // console.log('isLoggedIn ', isLoggedIn)

  useEffect(() => {
    // const chart = chartRef.current;
    // console.log('useEffect isLoggedIn ', isLoggedIn)
    // console.log('localStorage', localStorage)
    if (isLoggedIn) {
      //add isLogedIn check
      // setToken();
      // console.log('ChartJS', chart);
      // console.log('useEffect', setToken())
      dispatch(getDynamics());
    }
    // console.log()
  }, [dispatch, isLoggedIn]);

  return (
    <div className={style.dynamicsChartContainer}>
      <h1 className={style.title}>Dynamics of expenses and savings</h1>
      <ul className={style.list}>
        <li className={style.listItem}>Accumulated</li>
        <li className={style.listItem}>Expenses</li>
        <li className={style.listItem}>Income</li>
        {/* <Doughnut  options={options} data={data} /> */}
      </ul>

      {matchesTablet ? (
        <div className={style.chartContainer}>
          <Bar ref={chartRef} options={optionsTablet} data={data} height={'100%'} width={'100%'} />
        </div>
      ) : (
        <>
          <p>false</p>
          <div className={style.chartContainer}>
          <Bar ref={chartRef} options={optionsPhone} data={data} height={'100%'} width={'100%'} />
          </div>
        </>
      )}
      {/* <div className={style.barContainer}>
        <Bar ref={chartRef} options={options} data={data} height={'100%'} width={'100%'} />
      </div> */}

      {/* <div>
        {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
      </div> */}
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