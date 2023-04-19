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

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title);

// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const Chart = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      console.log('ChartJS', chart);
    }
  }, []);

    return <div>
        <h1 className={style.title}>Dynamics of expenses and savings</h1>
        <ul className={style.list}>
            <li className={style.listItem}>Accumulated</li>
            <li className={style.listItem}>Expenses</li>
            <li className={style.listItem}>Income</li>
            {/* <Doughnut  options={options} data={data} /> */}
            
        </ul>
        <div className={style.barContainer}>
          <Bar ref={chartRef} options={options} data={data} height={'100%'}/>
        </div>
    </div>
}