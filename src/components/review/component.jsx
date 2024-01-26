import styles from "./styles.module.scss";

const Review = ({ review }) => {
  const { user, text, rating } = review;
  return (
    <div className={styles.review}>
      {user} rated it {rating} : &quot;{text}&quot;
    </div>
  );
};

export default Review;
