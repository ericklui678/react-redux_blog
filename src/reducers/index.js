import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// import redux-form, formReducer is an alias for reducer
import { reducer as formReducer } from 'redux-form';

// make sure to add redux-form to combineReducers
// key MUST be named 'form'
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
