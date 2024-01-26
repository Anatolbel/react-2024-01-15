import Review from "../review/component";

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <Review review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews
