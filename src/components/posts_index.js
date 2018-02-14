import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  // componentDidMount is automatically called after the component shows in DOM
  // componentWillMount is a lifecycle method before the component shows in DOM
  // since the request is asynchronous, both lifecycle methods will work
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// before we used to pass in mapDispatchToProps as 2nd param, here's a shortcut
// this does exactly the same as...
// export default connect (null, mapDispatchToProps)(PostIndex);
export default connect(null, { fetchPosts })(PostIndex);
