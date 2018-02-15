import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// used to navigate to other components
// acts like href tag for typical routing, but prevents browser from making
  // another HTTP requests and only routes to new component
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  // componentDidMount is automatically called after the component shows in DOM
  // componentWillMount is a lifecycle method before the component shows in DOM
  // since the request is asynchronous, both lifecycle methods will work
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // need to convert object to an array of li elements using lodash
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>{post.id} - {post.title}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='text-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// before we used to pass in mapDispatchToProps as 2nd param, here's a shortcut
// this does exactly the same as...
// export default connect (null, mapDispatchToProps)(PostIndex);
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
