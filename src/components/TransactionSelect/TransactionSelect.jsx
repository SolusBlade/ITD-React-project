import Select from 'react-select';
import { IconOption } from './iconsForSelectCategory';

const TransactionSelect = ({ transformCategory, onChange, value }) => {
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
