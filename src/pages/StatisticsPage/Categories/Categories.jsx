import { useEffect, useState } from 'react';
import d from './Categories.module.scss';
import {
  categoryStatistic,
  getCashflowCategoriesPercentage,
} from 'redux/transactions/transactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/transactions/transactionsSelector';
import { getCashflowCategoriesPercentageApi } from 'services/connectoinsApi';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  useEffect(() => {
    const date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    };
    console.log('lsplfkcps');
    isLoggedIn && getCashflowCategoriesPercentageApi(date);
  }, [isLoggedIn, dispatch]);

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
