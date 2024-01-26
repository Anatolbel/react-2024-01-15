import styles from "./styles.module.scss";

const Dish = ({ dish }) => {
  const { name, ingredients, price } = dish;
  return (
    <div className={styles.dish}>
      <b>{name}</b> for ${price} ({ingredients.join(", ")})
    </div>
  );
};

export default Dish;