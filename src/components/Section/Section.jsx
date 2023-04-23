import s from './Section.module.scss';

const Section = ({ children }) => {
  return <section className={s.vectorImg}>{children}</section>;
};

export default Section;
