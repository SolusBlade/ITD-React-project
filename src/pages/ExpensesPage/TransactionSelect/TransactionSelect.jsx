import Select from 'react-select';

const TransactionSelect = ({ transformCategory, name }) => {
  return (
    <label className="labelForSelector">
      <p className="labelText">Per category</p>
      <Select
        className="select-container"
        classNamePrefix="select"
        options={transformCategory}
        name="category"
      />
    </label>
  );
};

export default TransactionSelect;
