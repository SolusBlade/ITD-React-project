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
import { Bar } from 'react-chartjs-2';
import { useRef, useEffect, useMemo } from 'react';
import style from './Chart.module.scss';
import { optionsPhone, optionsTablet } from 'services/dynamics/chartOptions';
import { useSelector, useDispatch } from 'react-redux';
import { getDynamics } from 'redux/dynamics/dynamicsOperations';
import {
  selectStatByMonth,
  selectStatByYear,
} from 'redux/dynamics/dynamicsVariables';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import DateComp from '../DateComp/DateComp';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const Chart = () => {
  const matchesTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();
  const chartRef = useRef(null);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const statByYear = useSelector(selectStatByYear);
  const statByMonth = useSelector(selectStatByMonth);
  const { income, expense, accumulated, plan, planInProcent } = statByMonth;

  const labels = useMemo(() => {
    return [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getDynamics());
    }
  }, [dispatch, isLoggedIn]);

  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          data: labels.map((_, i) => {
            for (let elem of statByYear) {
              let accumulated = elem.income - elem.expense;
              if (i + 1 === +elem.month) {
                return accumulated >= 0 ? accumulated : 1;
              }
            }
            return 0;
          }),
          backgroundColor: '#6359E9',
        },
        {
          data: labels.map((_, i) => {
            for (let elem of statByYear) {
              if (i + 1 === +elem.month) {
                return elem.expense;
              }
            }
            return 0;
          }),
          backgroundColor: '#3A6AF5',
        },
        {
          data: labels.map((_, i) => {
            for (let elem of statByYear) {
              if (i + 1 === +elem.month) {
                return elem.income;
              }
            }
            return 0;
          }),
          backgroundColor: '#F3F3F3',
        },
      ],
    };
  }, [labels, statByYear]);

  return (
    <div className={style.dynamicsChartContainer}>
      <h1 className={style.title}>Dynamics of expenses and savings</h1>
      <ul className={style.list}>
        <li className={style.listItem}>Accumulated</li>
        <li className={style.listItem}>Expenses</li>
        <li className={style.listItem}>Income</li>
      </ul>

      {matchesTablet ? (
        <div className={style.chartContainer}>
          <Bar
            ref={chartRef}
            options={optionsTablet}
            data={data}
            height={'100%'}
            width={'100%'}
          />
        </div>
      ) : (
        <>
          <div className={style.chartContainer}>
            <Bar
              ref={chartRef}
              options={optionsPhone}
              data={data}
              height={'100%'}
              width={'100%'}
            />
          </div>
        </>
      )}
      <div className={style.statContainer}>
        <DateComp />
        {statByMonth === 'no transactions for this period' ? (
          <p className={style.errorItem}>No information for this period</p>
        ) : (
          <ul className={style.statList}>
            <li className={style.statListItem}>
              <p className={style.itemTitle}>Income, &#8372;</p>
              <p className={style.itemNum}>{income ? income : 0}</p>
            </li>
            <li className={style.statListItem}>
              <p className={style.itemTitle}>Expenses, &#8372;</p>
              <p className={style.itemNum}>{expense ? expense : 0}</p>
            </li>
            <li className={style.statListItem}>
              <p className={style.itemTitle}>Accumulated, &#8372;</p>
              <p className={style.itemNum}>{accumulated ? accumulated : 0}</p>
            </li>
            <li className={style.statListItem}>
              <p className={style.itemTitle}>Plan, &#8372;</p>
              <p className={style.itemNum}>{plan ? plan : 0}</p>
            </li>
            <li className={style.statListItem}>
              <p className={style.itemTitle}>Plan, %</p>
              <p className={style.itemNum}>
                {isNaN(parseInt(planInProcent)) || planInProcent === null
                  ? '0'
                  : parseInt(planInProcent)}
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};