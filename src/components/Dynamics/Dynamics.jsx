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
import { Doughnut, Bar } from "react-chartjs-2";
import { dataArr } from "./variables";
import { faker } from '@faker-js/faker';
import { useRef, useEffect } from "react";
import style from "./Dynamics";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title);

{/* <Doughnut data={...} /> */}
 export const options = {
  chartArea:{
    bottom: 5
  },
  maintainAspectRatio: false,
  categoryPercentage: 0.5,
  barPercentage: 0.5,
  // barValueSpacing: 10,
  indexAxis: 'y',
  // barThickness: 8,
  borderRadius: 6,
  elements: {
    bar: {
      borderWidth: 0,
      // categoryPercentage: 0.1,
      // barPercentage: 0.9,
      // width: 1000
    },
  },
  
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
      labels: {
        // This more specific font property overrides the global property
        font: {
            size: 16,
        },
    }
    },
    title: {
      display: false,
    },
  },
  layout:{
    padding: 10
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        // drawBorder: false,
        borderColor: 'white',

        borderWidth: 2,
        // color: 'rgba(243, 243, 243, 0.2)'
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#F3F3F3'
      }
    },
    x: {
      grid: {
        // display: false,
        color: 'rgba(243, 243, 243, 0.2)',
        // offset: true
        // tickColor: 'white'
        borderColor: 'white',
        borderWidth: 2,
        tickLength: 2,
        // drawBorder: false,
      },
      border:{
        display: false,
        dash: [6, 10],
        // borderColor: 'white',
      },
      ticks: {
        color: '#F3F3F3'
      },
      position: 'top'
    }
    
  },
  labels: {
    fontColor: '#F3F3F3'
  }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
      label: 'label1',
      data: labels.map(() => 200),
      // borderColor: 'rgb(255, 99, 132)',
      backgroundColor: '#6359E9',
    },
    {
      label: 'label2',
      data: labels.map(() => 300),
      // borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#3A6AF5',
    },
    {
      label: 'label3',
      data: labels.map(() => 450),
      // borderColor: 'rgb(150, 162, 150)',
      backgroundColor: '#F3F3F3',
    }
  ],
};

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