import styles from "./styles.module.scss";

const Dish = ({ name, ingredients, price }) => {
  return (
    <div className={styles.dish}>
      <b>{name}</b> for ${price} ({ingredients.join(", ")})
    </div>
  );
};

export default Dish;