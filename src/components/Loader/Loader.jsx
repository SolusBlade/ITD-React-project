import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="300"
        visible={true}
      />
    </div>
  );
};

export default Loader;
