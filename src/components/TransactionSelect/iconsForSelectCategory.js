import { components } from 'react-select';
import Icon from '../Icon/Icon';
import c from '../ModalAddIncome/MoadlAddIncome.module.scss';

const { Option } = components;

export const IconOption = props => (
  <Option {...props}>
    <Icon
      name={props.data.value}
      width={18}
      height={18}
      secondaryClassName={c.categoryIcon}
    />
    {props.data.label}
  </Option>
);
