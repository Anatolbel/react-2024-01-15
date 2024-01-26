import Restaurant from "../restaurant/component";

const Restaurants = ({restaurants}) => {
  return (
    <>
      {restaurants.map((restaurant) => {
        return <Restaurant restaurant={restaurant} key={restaurant.id} />;
      })}
    </>
  );
};

export default Restaurants
