import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // will use lodash to convert array of objects payload into object
      // where posts id is the key for each object
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
