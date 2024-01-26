import { restaurants } from '../../constants/mock'
import Restaurants from '../restaurants/component';

const Content = () => {
  return (
    <Restaurants restaurants={restaurants} />
  );
}

export default Content
