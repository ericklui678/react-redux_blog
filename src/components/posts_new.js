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
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Tags'
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

export default reduxForm({
  // PostsNewForm is our unique name for this form
  // this is useful when having multiple forms in a page
  form: 'PostsNewForm'
})(PostsNew);
