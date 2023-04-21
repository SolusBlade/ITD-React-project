import d from './Categories.module.scss';

const Categories = () => {
    
    const categories = [
        {
          category: 'products',
          amount: 1000,
          percentage: '25%',
        },
        {
          category: 'product',
          amount: 1000,
          percentage: '25%',
        },
        {
          category: 'produc',
          amount: 1000,
          percentage: '25%',
        },
        {
          category: 'produ',
          amount: 1000,
          percentage: '25%',
        },
        {
          category: 'prod',
          amount: 1000,
          percentage: '25%',
        },
        {
          category: 'pro',
          amount: 1000,
          percentage: '25%',
        },
      ];

  return (
    <>
      <ul className={d.categoriesList}>
        {categories.map(({ category, amount, percentage }) => (
          <li key={category} className={d.categoriesItem}>
            <span className={d.categoriesItemEl}>
              <p className={d.categoriesDes}>{category}</p>
              <p className={d.categoriesAmount}>-{amount} UAH</p>
            </span>
            <p className={d.categoriesPerc}>{percentage}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;