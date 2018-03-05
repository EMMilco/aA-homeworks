import benchesReducer from './benches_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  benches: benchesReducer
});

export default entitiesReducer;
