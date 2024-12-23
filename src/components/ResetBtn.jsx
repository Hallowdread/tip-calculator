import PropTypes from "prop-types";

export const ResetBtn = ({ setBill, setFriendService, setService }) => {
  const handleReset = () => {
    setBill(0);
    setService(0);
    setFriendService(0);
  };

  return (
    <button className="reset-btn" onClick={handleReset}>
      RESET
    </button>
  );
};

ResetBtn.propTypes = {
  setBill: PropTypes.func.isRequired,
  setService: PropTypes.func.isRequired,
  setFriendService: PropTypes.func.isRequired,
};
