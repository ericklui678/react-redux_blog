import React, { Component } from 'react';
// import 2 form helpers from redux-form
// reduxForm is very similar to the 'connect' helper we've been wiring redux
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/';

class PostsNew extends Component {
  // field argument is needed to know which field needs to be updated
  // ...field.input is a bunch of event handler templates so we don't have to
    // redundantly write it each time
  // ternary operator for errors
    // if field was 'touched', meaning user focused on input, then focused away
      // show errors, otherwise show blank
  renderField(field) {
    const { meta: { touched, error } } = field; // destructuring for nested obj

    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-danger'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // only called if no errors in form
  onSubmit(values) {
    // this component has access to props.history thanks to <Route /> in
    // our main index.js
    // props.history redirects back to route '/', but need to redirect
      // AFTER the post or else we post same time we fetch data
    
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props; // this.props.handleSubmit is a property passed to this component from redux-form

    // redux-form only handles state of the form, you have to handle submit
    return (
      // Field component doesn't know how to show itself on the screen
      // only knows how to interact with redux
      // Component property is a function you have to define to render JSX
      // label is just our own property that we can pass and render to field.label
      <form

        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field
          label='Title For Post'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

// helper validate function to be passed to reduxForm
// values argument is an object of input values
// needs to return an object
function validate(values) {
  const errors = {};
  // Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }
  // If errors is empty, the form is fine to submit
  // If errors has any property, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, // validate function is called when form is submitted
  // PostsNewForm is our unique name for this form
  // this is useful when having multiple forms in a page
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);

// how to nest multiple connect helpers
