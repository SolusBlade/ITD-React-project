import clsx from 'clsx';
import icon from '../../assets/icons/icons.svg';
import d from './Icon.module.scss';

const Icon = ({ name, width, height, className, secondaryClassName }) => (
  <svg
    width={width}
    height={height}
    className={clsx(
      className && d[className],
      secondaryClassName && secondaryClassName
    )}
  >
    <use xlinkHref={`${icon}#${name}`} />
  </svg>
);

export default Icon;
