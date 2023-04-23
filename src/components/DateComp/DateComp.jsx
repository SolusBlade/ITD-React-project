// eslint-disable-next-line
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateComp.scss';
import Icon from 'components/Icon/Icon';
import { useDispatch } from 'react-redux';
import { getTransaction } from 'redux/transactions/transactionsOperations';
import { useLocation } from 'react-router-dom';

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const location = useLocation();

  const changedDateForPicker = newDate => {
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${months[month]}, ${year}`;
  };

  const changedDateForApi = newDate => {
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    return { year, month: month + 1 };
  };

  const handleCloseCalendar = date => {
    if (location.pathname.endsWith('transactions')) {
      dispatch(getTransaction(changedDateForApi(date)));
    }
    if (location.pathname.endsWith('categories')) {
      console.log('handleCloseCalendar  categories:', changedDateForApi(date));
    }
  };

  return (
    <div className={'calendarWrap'}>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)} // используем setSelectedDate, чтобы обновлять значение выбранной даты
        value={changedDateForPicker(selectedDate)}
        onCalendarClose={() => handleCloseCalendar(selectedDate)}
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
