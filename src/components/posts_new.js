import React, { Component } from 'react';
// import 2 form helpers from redux-form
// reduxForm is very similar to the 'connect' helper we've been wiring redux
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // field argument is needed to know which field needs to be updated
  // ...field.input is a bunch of event handler templates so we don't have to
    // redundantly write it each time
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      // Field component doesn't know how to show itself on the screen
      // only knows how to interact with redux
      // Component property is a function you have to define to render JSX
      // label is just our own property that we can pass and render to field.label
      <form>
        <Field
          label='Title For Post'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='tags'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
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
})(PostsNew);
