import { useState } from "react";
import Button from "../button/component";
import styles from "./styles.module.scss";

const Dish = ({ dish }) => {
  const { name, ingredients, price } = dish;
  const [dishNumber, setDishNumber] = useState(0);

  const addDish = () => {
    setDishNumber(dishNumber + 1);
  }
  const removeDish = () => {
    setDishNumber(dishNumber - 1);
  }

  return (
    <div className={styles.dish}>
      <b>{name}</b> for ${price} ({ingredients.join(", ")})
      <Button
        onClick={addDish}
        disabled={dishNumber >= 5}
        className={styles.buttons}
      >
        +
      </Button>
      {dishNumber}
      <Button
        onClick={removeDish}
        disabled={dishNumber <= 0}
        className={styles.buttons}
      >
        -
      </Button>
    </div>
  );
};

export default Dish;