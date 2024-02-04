import { restaurants } from '../../constants/mock'
import { useState } from 'react';
import Tabs from '../tabs/component';
import Restaurant from '../restaurant/component';

const Content = () => {
  const defaultRestaurant = restaurants[0].id;
  const [activeRestaurantId, setActiveRestaurantId] = useState(defaultRestaurant);

  const clickHandler = (e) => {
    setActiveRestaurantId(e.target.dataset.id);
  };
  const activeRestaurantData = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId
  );
  
  return (
    <>
      <Tabs restaurants={restaurants} onClick={clickHandler} />
      <Restaurant restaurant={activeRestaurantData} />
    </>
  );
}

export default Content
