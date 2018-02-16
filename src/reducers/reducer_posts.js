import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
    // look at state object, if it has the key of the post id, remove from object
    // and return new state object
      return _.omit(state, action.payload)
    case FETCH_POSTS:
      // will use lodash to convert array of objects payload into object
      // where posts id is the key for each object
      console.log(state);
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // ES5 way
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
