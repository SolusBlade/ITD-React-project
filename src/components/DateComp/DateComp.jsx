
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateComp.scss';
import Icon from 'components/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesStat,
  getTransaction,
} from 'redux/transactions/transactionsOperations';
import { useLocation } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import clsx from 'clsx';
import { getDynamicsByMonth } from 'redux/dynamics/dynamicsOperations';

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
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const location = useLocation();
  const [isDirty, setIsDirty] = useState(false);

  const isDynamicsPage = location.pathname.endsWith('dynamics');

  useEffect(() => {
    if (location.pathname.endsWith('transactions')) {
      isLoggedIn && dispatch(getTransaction(changedDateForApi(selectedDate)));
    }
    if (location.pathname.endsWith('categories')) {
      isLoggedIn &&
        dispatch(getCategoriesStat(changedDateForApi(selectedDate)));
    }
    if (location.pathname.endsWith('dynamics')) {
      isLoggedIn &&
        dispatch(getDynamicsByMonth(changedDateForApi(selectedDate)));
    }
  }, [isLoggedIn, dispatch, location.pathname, selectedDate]);

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
    if (isDirty) {
      return;
    }
    if (location.pathname.endsWith('transactions')) {
      dispatch(getTransaction(changedDateForApi(date)));
    }
    if (location.pathname.endsWith('categories')) {
      dispatch(getCategoriesStat(changedDateForApi(date)));
    }
    if (isDynamicsPage) {
      dispatch(getDynamicsByMonth(changedDateForApi(date)));
    }
    setIsDirty(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDirty(true);
  }

  return (
    <div
      className={clsx('calendarWrap', isDynamicsPage && 'calendarDynamicsWrap')}
    >
      <DatePicker
        selected={selectedDate}
        onChange={date => handleDateChange(date)} // используем setSelectedDate, чтобы обновлять значение выбранной даты
        value={changedDateForPicker(selectedDate)}
        onCalendarClose={() => handleCloseCalendar(selectedDate)}
        maxDate={new Date()}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
      <Icon
        name={!isDynamicsPage ? 'icon-calendar' : 'icon-vector-down'}
        width={'24'}
        height={'24'}
        className={'icon-calendar'}
        secondaryClassName={'icon-claendar-dynamics'}
      />
    </div>
  );
};

export default DateComp;
