import classes from "./RatingStars.module.css";

type StarsProps = {
  rating: {
    rate: number;
    count: number;
  };
};

export default function RatingStars({ rating }: StarsProps) {
  return (
    <div
      className={classes.stars}
      style={
        {
          "--rating": rating.rate,
        } as React.CSSProperties
      }
    >
      <p>{rating.count}</p>
    </div>
  );
}
