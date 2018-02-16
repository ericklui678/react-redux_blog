import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    // if user were to load straight into show post page without index
    // then refetch data
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    // get post id from react-router to pass to our delete AJAX request
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    // Render this while get request is getting data
    if (!post) return <div>Loading..</div>;

    return (
      <div>
        <Link to='/'>Back to index</Link>
        <button
          className='btn btn-danger float-right'
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// 2nd argument is the props object that is headed to this component
// own props is essentially same as this.props
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
