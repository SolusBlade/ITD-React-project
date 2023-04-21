import Icon from '../../Icon/Icon';
import d from './Logo.module.scss';

export const Logo = () => {
  return (
    <span className={d.headerLogo}>
      <Icon name={'logo'} width={'26'} height={'26'} className={'logo'} />
      <p className={d.logoHeaderDes}>Finance</p>
    </span>
  );
};