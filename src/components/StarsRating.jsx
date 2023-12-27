import classes from "./StarsRating.module.css";
import PropTypes from "prop-types";

function StarsRating({ rating }) {
  return (
    <div
      className={classes.stars}
      style={{
        "--rating": rating.rate,
      }}
    >
      <p>{rating.count}</p>
    </div>
  );
}

StarsRating.propTypes = {
  rating: PropTypes.object,
};

export default StarsRating;
