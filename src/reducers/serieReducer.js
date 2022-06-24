import {SET_SERIES} from '../actions/serieAction';
//import seriesMock from '../mock/series.json';

export default function (state = null, action) {
  switch (action.type) {
    case SET_SERIES:
      return action.series;
    default:
      return state;
  }
}

// export default function (state = seriesMock, action) {
//   return state;
// }
