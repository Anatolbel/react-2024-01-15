import style from './styles.module.scss';

const Tabs = ({ restaurants, onClick }) => {
  return (
    <ul className={style.tabs}>
      {restaurants.map((restaurant) => {
        return (
          <li
            className={style.tab}
            key={restaurant.id}
            onClick={onClick}
            data-id={restaurant.id}
          >
            {restaurant.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
