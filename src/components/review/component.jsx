
const Review = ({ review }) => {
  const { user, text, rating } = review;
  return (
    <div >
      {user} rated it {rating} : &quot;{text}&quot;
    </div>
  );
};

export default Review;
