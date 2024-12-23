import PropTypes from "prop-types";

export const Result = ({ bill, service, friendService }) => {
  const tip = (service + friendService) / 2;
  const total = bill + tip;
  return (
    <div className="result">
      <div className="total">{`Total: $${total}`}</div>
      <div className="breakdown">{`(Bill: $${bill} + Tip: $${tip})`}</div>
    </div>
  );
};

Result.propTypes = {
  bill: PropTypes.number.isRequired,
  service: PropTypes.number.isRequired,
  friendService: PropTypes.number.isRequired,
};
