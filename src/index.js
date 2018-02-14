import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// BrowserRouter decides what to do based on change on URL
  // I want react-router to look at the URL when deciding on displaying components
// Route component is to provide configuration for URL like...
  // If I see this URL, show this component
import promise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Switch looks at current URL and matches it with the first URL inside Switch
// So generally you want to put your most specific route first to avoid having
  // PostNew and PostIndex both rendering
render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
