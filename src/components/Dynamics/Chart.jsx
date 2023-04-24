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
import { useRef, useEffect } from 'react';
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
import { addCashflowTransactionApi } from "services/connectoinsApi";

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
  // const matches = useMediaQuery('(min-width: 768px)');
  const matchesTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();
  // eslint-disable-next-line
  // const dynamics = useSelector(selectDynamics);
  const chartRef = useRef(null);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const statByYear = useSelector(selectStatByYear);
  const statByMonth = useSelector(selectStatByMonth);
  const { income, expense, accumulated, plan, planInProcent } = statByMonth;
  // let [statistics, setStatistics] = useState({
  //   "income": 0,
  //   "expense": 0,
  //   "accumulated": 0,
  //   "plan": 0,
  //   "planInProcent": "0%"
  // })
  const labels = [
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
  // console.log(matchesTablet)
  // console.log('isLoggedIn ', isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      //add isLogedIn check
      dispatch(getDynamics());
    }
    // console.log()
  }, [dispatch, isLoggedIn]);

  // console.log('statByYear', +statByYear[0].month)
  const data = {
    labels,
    datasets: [
      {
        //   label: 'accumulated',
        // data: labels.map((_, i) => console.log(statByYear), 300),
        data: labels.map((_, i) => {
          for (let elem of statByYear) {
            let accumulated = elem.income - elem.expense;
            // (i + 1 === +elem.month) ? console.log('for in month', i + 1, +elem.month) : 0
            if (i + 1 === +elem.month) {
              return accumulated >= 0 ? accumulated : 0;
            }
          }
          return 0;
        }),
        // borderColor: 'rgb(255, 99, 132)',
        backgroundColor: '#6359E9',
      },
      {
        //   label: 'expenses',
        data: labels.map((_, i) => {
          // statByYear[i]?.expense
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
        //   label: 'income',
        data: labels.map((_, i) => {
          for (let elem of statByYear) {
            if (i + 1 === +elem.month) {
              return elem.income;
            }
          }
          return 0;
        }),
        // data: labels.map((_, i) => 500),
        // borderColor: 'rgb(150, 162, 150)',
        backgroundColor: '#F3F3F3',
      },
    ],
  };
  console.log(statByMonth);
  const onClick = () => {
    const obj = {
      type: 'expense',
      category: 'others',
      comment: 'b',
      sum: 2000,
      date: 1674562701000,
    };
    addCashflowTransactionApi(obj);
  }
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
      {/* <div className={style.barContainer}>
        <Bar ref={chartRef} options={options} data={data} height={'100%'} width={'100%'} />
      </div> */}

      {/* <div>
        {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
      </div> */}
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
                {planInProcent ? parseInt(planInProcent) : 0}
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};