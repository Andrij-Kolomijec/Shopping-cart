import classes from "./Item.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchStoreItems, { StoreItem } from "../utils/http";
import RatingStars from "../components/RatingStars";
import AddToCartButton from "../components/AddToCartButton";

export default function Item() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["storeItems"],
    queryFn: fetchStoreItems,
    staleTime: 1000 * 60 * 5,
    placeholderData: [],
  });

  const item = data!.find((item) => item.id === Number(id)) as StoreItem;

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
        <h4>{item!.title}</h4>
        <div className={classes.picture}>
          <img draggable={false} src={item!.image} alt={item!.title} />
        </div>
        <RatingStars rating={item!.rating} />
        <p>{item!.description}</p>
        <p>{item!.price} €</p>
        <AddToCartButton item={item} />
      </div>
    </div>
  );
}
