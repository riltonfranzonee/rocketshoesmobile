import { combineReducers } from 'redux';

import cart from './cart/reducer';
import navigation from './navigation/reducer';

const rootReducer = combineReducers({
  cart,
  navigation,
});

export default rootReducer;
