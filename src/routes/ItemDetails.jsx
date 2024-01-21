import classes from "./ItemDetails.module.css";
import PropTypes from "prop-types";
import StarsRating from "../components/StarsRating";
import AddToCartButton from "../components/AddToCartButton";
import { useParams, useRouteLoaderData, useNavigate } from "react-router-dom";

function ItemDetails({ onClickAdd }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const items = useRouteLoaderData("shop");
  console.log(items);
  const item = items.find((item) => item.id === Number(id));
  function handleClose() {
    navigate("/shop");
  }
  return (
    <div
      className={`${classes.modal} ${classes["display-block"]}`}
      onClick={handleClose}
    >
      <div
        className={classes.content}
        onClick={(e) => screen.width > 1000 && e.stopPropagation()}
      >
        <h4>{item.title}</h4>
        <div className={classes.picture}>
          <img draggable={false} src={item.image} alt={item.title} />
        </div>
        <StarsRating rating={item.rating} />
        <p>{item.description}</p>
        <p>{item.price} €</p>
        <AddToCartButton
          onClick={(e) => {
            e.stopPropagation();
            onClickAdd(item);
          }}
        />
      </div>
    </div>
  );
}

ItemDetails.propTypes = {
  onClickAdd: PropTypes.func,
};

export default ItemDetails;
