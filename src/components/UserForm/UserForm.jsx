import { memo } from 'react';
import { useDispatch } from 'react-redux';
import s from './UserForm.module.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import icon from '../../assets/icons/icons.svg';

YupPassword(Yup);

const UserForm = ({ onSubmit, btnSubmit }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        toggle: true,
      }}
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
          toggle: Yup.bool(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(onSubmit(values));
        setSubmitting(false);
      }}
    >
      {({ errors, touched, values }) => (
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
                  style={
                    touched.name && errors.name
                      ? {
                          outline: '1px solid red',
                        }
                      : {
                          outline: '1px solid white',
                        }
                  }
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
              style={
                touched.email && errors.email
                  ? {
                      outline: '1px solid red',
                    }
                  : {
                      outline: '1px solid white',
                    }
              }
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
              style={
                touched.password && errors.password
                  ? {
                      outline: '1px solid red',
                    }
                  : {
                      outline: '1px solid white',
                    }
              }
              className={s.inputField}
              type={values.toggle ? 'password' : 'text'}
              id="passwordInput"
              placeholder="Enter Password"
              name="password"
            />
            <label className={s.checkboxtLabel} htmlFor="toggle">
              <Field
                className={s.eyeCheckbox}
                type="checkbox"
                id="toggle"
                name="toggle"
              />
              <span className={s.eyeSpan}>
                {values.toggle ? (
                  <svg width="24" height="24" fill={touched.password && errors.password? 'red': 'white' } >
                    <use xlinkHref={`${icon}#icon-eye-blocked`} />
                  </svg>
                ) : (
                  <svg width="24" height="24" fill={touched.password && errors.password? 'red': 'white' } >
                    <use xlinkHref={`${icon}#icon-eye`} />
                  </svg>
                )}
              </span>
            </label>
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
