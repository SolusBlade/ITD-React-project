import icon from '../../assets/icons/icons.svg';

const Icon = ({ name, width, height, className }) => (
    <svg width={width} height={height} className={className} >
      <use xlinkHref={`${icon}#${name}`} />
    </svg>
  );

export default Icon;