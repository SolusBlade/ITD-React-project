import { Formik, Form, Field } from 'formik';
import { options } from '../options';
import s from './TransactionDataList.module.scss';
import Input from '../Input';

const initialValues = {
  balance: `Account balance: UAH 80,000`,
  comment: '',
  summ: '',
};

const TransactionDataList = () => {
  return (
    <section className={s.transaction}>
      <Formik initialValues={initialValues}>
        <Form className={s.form} autoComplete="off">
          <Input
            name="balance"
            title="From account"
            placeholder=""
            disabled={true}
          />

          <label htmlFor="category" className={s.lable}>
            <p className={s.inputTitle}>Per category</p>
            <Field
              className={s.input}
              as="select"
              children={options.map(({ name, value }, i) => (
                <option key={i} className={s.option} value={value}>
                  {name}
                </option>
              ))}
              name="category"
              placeholder="Per Category"
            ></Field>
          </label>

          <Input
            name="comment"
            title="Expense comment"
            placeholder="Concert tickets"
          />

          <Input name="summ" title="Summ" placeholder="00.00" />
        </Form>
      </Formik>
    </section>
  );
};

export default TransactionDataList;
