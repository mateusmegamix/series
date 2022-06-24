import {combineReducers} from 'redux';

import userReducer from './userReducer';
import serieFormReducer from './serieFormReducer';
import seriesReducer from './serieReducer';

export default combineReducers({
  user: userReducer,
  serieForm: serieFormReducer,
  series: seriesReducer,
});
