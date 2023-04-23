import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateComp.scss';
import Icon from 'components/Icon/Icon';
import { useDispatch } from 'react-redux';
import { getTransaction } from 'redux/transactions/transactionsOperations';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateComp = () => {
  const [startDate, setStartDate] = useState(new Date());

  const changedDate = () => {
    const month = startDate.getMonth();
    const year = startDate.getFullYear();
    return `${months[month]}, ${year}`;
  };
  const dispatch = useDispatch();
  return (
    <div className={'calendarWrap'}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        value={changedDate()}
        onCalendarClose={() => dispatch(getTransaction(startDate))} // сюда нужно передать хендлер который должен отрабатывать на закрытие календаря
        maxDate={new Date()}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
      <Icon
        name={'icon-calendar'}
        width={'24'}
        height={'24'}
        className={'icon-calendar'}
      />
    </div>
  );
};

export default DateComp;
