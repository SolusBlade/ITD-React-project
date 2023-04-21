import DateComp from 'components/DateComp/DateComp';

const { Outlet } = require("react-router-dom")

const StatisticsPage = () => {
  return (
    <>
      <DateComp />
      <Outlet />
    </>
  );
};

export default StatisticsPage;
