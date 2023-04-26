import d from './Categories.module.scss';

import { useSelector } from 'react-redux';
import { selectedChengedCategoriesStat } from 'redux/transactions/transactionsSelector';

const Categories = () => {
  const categories = useSelector(selectedChengedCategoriesStat);

  return (
    <>
      {categories?.length === 0 && (
        <div className={d.noTransactionWrapper}>
          <p className={d.noTransactionText}>You have no transactions</p>
        </div>
      )}
      <ul className={d.categoriesList}>
        {categories
          .sort((a, b) => a.category.localeCompare(b.category))
          .map(({ category, amount, percentage }) => (
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
