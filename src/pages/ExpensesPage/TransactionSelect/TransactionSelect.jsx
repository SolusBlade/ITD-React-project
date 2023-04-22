import Icon from 'components/Icon/Icon';
import Select, { components } from 'react-select';
import s from '../ModalAddIncome/MoadlAddIncome.module.scss';
const TransactionSelect = ({ transformCategory, onChange, value }) => {
  const { Option } = components;
  const IconOption = props => (
    <Option {...props}>
      <Icon
        name={props.data.value}
        width={18}
        height={18}
        secondaryClassName={s.categoryIcon}
      />
      {props.data.label}
    </Option>
  );

  return (
    <label className="labelForSelector">
      <p className="labelText">Per category</p>
      <Select
        onChange={onChange}
        value={value}
        isSearchable={false}
        placeholder="Choose category"
        className="select-container"
        classNamePrefix="select"
        options={transformCategory}
        name="category"
        components={{ Option: IconOption }}
      />
    </label>
  );
};

export default TransactionSelect;
