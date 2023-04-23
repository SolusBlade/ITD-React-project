// eslint-disable-next-line
import { selectDynamics } from 'redux/dynamics/dynamicsVariables';
// eslint-disable-next-line
import { useSelector } from 'react-redux';

export const labels = [
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];
// const dynamics = useSelector(selectDynamics);

// console.log('Chart dynamics', dynamics)

export const data = {
  labels,
  datasets: [
    {
      //   label: 'label1',
      data: labels.map(() => 200),
      // borderColor: 'rgb(255, 99, 132)',
      backgroundColor: '#6359E9',
    },
    {
      //   label: 'label2',
      data: labels.map(() => 300),
      // borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#3A6AF5',
    },
    {
      //   label: 'label3',
      data: labels.map(() => 600),
      // borderColor: 'rgb(150, 162, 150)',
      backgroundColor: '#F3F3F3',
    },
  ],
};
