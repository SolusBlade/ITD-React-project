import moment from 'moment';
import Icon from '../../../../components/Icon/Icon';
import s from './TransactionsItem.module.scss';
import { removeTransaction } from 'redux/transactions/transactionsOperations';
import { useDispatch } from 'react-redux';

const TransactionsItem = ({ openModal, id, sum, date, category, comment }) => {
  const dispatch = useDispatch();
  const removeTrans = id => {
    dispatch(removeTransaction(id));
  };

  console.log(id);
  return (
    <li className={s.transactionItem} key={id}>
      <div className={s.transactionThumb}>
        <div className={s.commentWrapper}>
          <p className={s.transactionDate}>
            {moment(date).format('DD.MM.YYYY')}
          </p>
          <p className={s.transactionComment}>{comment}</p>
        </div>

        <div>
          <p className={s.transactionSum}>{sum} UAH</p>
        </div>
      </div>
      <div className={s.thumb}>
        <p className={s.transactionCategory}>{category}</p>
        <div className={s.buttonThumb}>
          <button
            className={s.buttonItem}
            type="button"
            onClick={openModal}
            id={id}
          >
            <Icon
              name={'icon-pencil'}
              width={'22'}
              height={'22'}
              className={'icon-pencil'}
            />
          </button>
          <button
            className={s.buttonItem}
            type="button"
            onClick={removeTrans(id)}
          >
            <Icon
              name={'icon-trash'}
              width={'24'}
              height={'24'}
              className={'icon-trash'}
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TransactionsItem;
