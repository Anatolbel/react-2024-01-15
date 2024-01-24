import styles from "./styles.module.scss";

const Review = ({ user, text, rating }) => {
  return (
    <div className={styles.review}>
      {user} rated it {rating} : &quot;{text}&quot;
    </div>
  );
};

export default Review;
