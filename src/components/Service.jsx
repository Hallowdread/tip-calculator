import PropTypes from "prop-types";

export function Service({ label, className, id, value, onChange }) {
  return (
    <div className={className}>
      <label htmlFor="user-rating">{label}</label>
      <select
        id={id}
        placeholder="Select rating"
        value={value}
        onChange={onChange}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
Service.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
