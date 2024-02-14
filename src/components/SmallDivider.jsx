import PropTypes from "prop-types";
import "../style/SmallDivider.css";

function SmallDivider({ short = false }) {
  return (
    <div className="wrapper">
      <span className={"first" + (short ? " short" : "")}></span>
      <span className="second"></span>
      <span className="third"></span>
    </div>
  );
}

SmallDivider.propTypes = {
  short: PropTypes.bool,
};

export default SmallDivider;
