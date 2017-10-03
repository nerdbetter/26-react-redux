import { combineReducers } from 'redux';

import categories from './category';
import cards from './cards';

export default combineReducers({
  categories,
});
