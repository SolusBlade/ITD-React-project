// eslint-disable-next-line
import { useRef, useState } from 'react';
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
  const dispatch = useDispatch();
  const startDate = useRef(new Date());

  const changedDate = newDate => {
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${months[month]}, ${year}`;
  };

  console.log(changedDate(startDate.current));
  return (
    <div className={'calendarWrap'}>
      <DatePicker
        selected={startDate.current}
        onChange={date => (startDate.current = date)}
        value={changedDate(startDate.current)}
        onCalendarClose={() =>
          dispatch(getTransaction(changedDate(startDate.current)))
        } // сюда нужно передать хендлер который должен отрабатывать на закрытие календаря
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
