import classes from "./ItemDetails.module.css";
import PropTypes from "prop-types";
import StarsRating from "./StarsRating";
import AddToCartButton from "./AddToCartButton";

function ItemDetails({ show, onClose, item }) {
  return (
    <div
      className={`${classes.modal} ${
        show ? classes["display-block"] : classes["display-none"]
      }`}
      onClick={onClose}
    >
      {show && (
        <div className={classes.content} onClick={(e) => e.stopPropagation()}>
          <h4>{item.title}</h4>
          <div className={classes.picture}>
            <img draggable={false} src={item.image} alt={item.title} />
          </div>
          <StarsRating rating={item.rating} />
          <p>{item.description}</p>
          <p>{item.price} €</p>
          <AddToCartButton />
        </div>
      )}
    </div>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default ItemDetails;
