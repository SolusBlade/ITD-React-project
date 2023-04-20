import icon from '../../assets/icons/icons.svg';
import d from './Icon.module.scss';

const Icon = ({ name, width, height, className }) => (
    <svg width={width} height={height} className={d[className]} >
      <use xlinkHref={`${icon}#${name}`} />
    </svg>
  );

export default Icon;