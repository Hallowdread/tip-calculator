import PropTypes from "prop-types";

export function Bill({ value, onChange }) {
  return (
    <div className="input-group">
      <label>How much was the bill</label>
      <input
        type="text"
        id="bill"
        placeholder="Enter Amount"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
Bill.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
