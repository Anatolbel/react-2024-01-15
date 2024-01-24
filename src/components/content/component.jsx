import classNames from 'classnames';
import { restaurants } from '../../constants/mock'
import Dish from '../dish/component';
import Review from '../review/component';
import style from './styles.module.scss';

const Content = () => {
  return (
    <main className={classNames(style.container)}>
      {
        restaurants.map(restaurant => {
          return (
            <div key={restaurant.id} className={style.restaurant} >
              <h2>{restaurant.name} </h2>
              <div>
                <h3>Menu</h3>
                <ul>
                  {restaurant.menu.map((dish) => {
                    return (
                      <li key={dish.id}>
                        <Dish
                          name={dish.name}
                          ingredients={dish.ingredients}
                          price={dish.price}
                        />
                      </li>
                    );
                  })}
                </ul>
                <h3>Reviews</h3>
                <ul>
                  {restaurant.reviews.map((review) => {
                    return (
                      <li key={review.id}>
                        <Review
                          user={review.user}
                          text={review.text}
                          rating={review.rating}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })
      }
    </main>
  )
}

export default Content
