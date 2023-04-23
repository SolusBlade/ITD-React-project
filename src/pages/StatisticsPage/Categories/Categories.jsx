import { useEffect, useState } from 'react';
import d from './Categories.module.scss';
import { getCategoriesStat } from 'redux/transactions/transactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategoriesStat } from 'redux/transactions/transactionsSelector';

import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const Categories = () => {
  const categories = useSelector(selectedCategoriesStat);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  // useEffect(() => {
  //   const date = {
  //     year: new Date().getFullYear(),
  //     month: new Date().getMonth() + 1,
  //   };
  //   console.log('lsplfkcps');
  //   isLoggedIn && dispatch(getCategoriesStat(date));
  // }, [isLoggedIn, dispatch]);

  // const categories = [
  //     {
  //       category: 'products',
  //       amount: 1000,
  //       percentage: '25%',
  //     },
  //     {
  //       category: 'product',
  //       amount: 1000,
  //       percentage: '25%',
  //     },
  //     {
  //       category: 'produc',
  //       amount: 1000,
  //       percentage: '25%',
  //     },
  //     {
  //       category: 'produ',
  //       amount: 1000,
  //       percentage: '25%',
  //     },
  //     {
  //       category: 'prod',
  //       amount: 1000,
  //       percentage: '25%',
  //     },
  //     {
  //       category: 'pro',
  //       amount: 1000,
  //       percentage: '25%',
  //     },
  //   ];

  return (
    <>
      <ul className={d.categoriesList}>
        {categories.map(({ category, amount, percentage }) => (
          <li key={category} className={d.categoriesItem}>
            <span className={d.categoriesItemEl}>
              <p className={d.categoriesDes}>{category}</p>
              <p className={d.categoriesAmount}>-{amount} ₴</p>
            </span>
            <p className={d.categoriesPerc}>{parseFloat(percentage)}%</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;