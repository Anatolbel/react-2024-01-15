import styles from "./styles.module.scss";
import Menu from "../menu/component";
import Reviews from "../reviews/component";

const Restaurant = ({ restaurant }) => {
  return (
    <div key={restaurant.id} className={styles.restaurant}>
      <h2>{restaurant.name} </h2>
      <h3>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant
