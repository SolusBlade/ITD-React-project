import {  memo } from 'react';
import { useDispatch} from 'react-redux';
import s from './UserForm.module.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

const UserForm = ({ onSubmit, btnSubmit }) => {

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(4, 'Must be 4 characters or more')
          .max(25, 'Must be 25 characters or less'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Required')
          .min(7, 'Must contain at least 7 characters')
          .minLowercase(1, 'Must contain at least 1 lower case letter')
          .minUppercase(1, 'Must contain at least 1 UPPER case letter')
          .minNumbers(1, 'Must contain at least 1 number'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        dispatch(onSubmit(values));
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className={s.form}>
          <h3 className={s.title}>{btnSubmit}</h3>
          {btnSubmit === 'Register' && (
            <>
              {' '}
              <div className={s.inputWrap}>

              <label className={s.inputLabel} htmlFor="nameInput">
                Name
              </label>
              <Field
                style={touched.name && errors.name? {
                  outline: '1px solid red',}: {
                    outline: '1px solid white'}}
                className={s.inputField}
                type="text"
                name="name"
                id="namelInput"
                placeholder="Enter your name"
              />
                {touched.name && errors.name && (
              <div className={s.error}>{errors.name}</div>
            )}
              </div>
            </>
          )}

          <div className={s.inputWrap}>
            <label className={s.inputLabel} htmlFor="emailInput">
              Email
            </label>
            <Field
              style={touched.email && errors.email? {
                outline: '1px solid red',}: {
                  outline: '1px solid white'}}
              className={s.inputField}
              type="email"
              name="email"
              id="emailInput"
              placeholder="Enter Email"
            />
            {touched.email && errors.email && (
              <div className={s.error}>{errors.email}</div>
            )}
          </div>

          <div className={s.inputWrap}>
            <label className={s.inputLabel} htmlFor="passwordInput">
              Password
            </label>
            <Field
              style={touched.password && errors.password? {
                outline: '1px solid red',}: {
                  outline: '1px solid white'}}
              className={s.inputField}
              type="password"
              id="passwordInput"
              placeholder="Enter Password"
              name="password"
            />
            {touched.password && errors.password && (
              <div className={s.error}>{errors.password}</div>
            )}
          </div>

          <button className={s.button} type="submit">
            {btnSubmit}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default memo(UserForm);
