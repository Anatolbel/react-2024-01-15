import Dish from '../dish/component'
import './styles.module.scss'

const Menu = ({menu}) => {
  return (
    <ul>
      {menu.map((dish) => {
        return (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu
