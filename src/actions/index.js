// remember to npm install axios and redux-promise for AJAX requests
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=erick678';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request // redux-promise will unwrap the promise in our reducers
  };
}

export function createPost(values) {
  // 2nd argument must be object that you are posting
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return {
    type: CREATE_POST,
    payload: request
  };
}
