import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          autocomplete='off'
          placeholder='Name'
          required />
        <input
          type='text'
          name='brand'
          autocomplete='off'
          placeholder='Brand'
          required />
        <input
          type='number'
          name='price'
          step='0.01'
          min='0'
          autocomplete='off'
          placeholder='Price per pint'
          required />
        <input
          type='number'
          name='alcoholContent'
          min='0'
          autocomplete='off'
          placeholder='Alcohol content'
          required />        
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pintsRemaining: 124, id: v4()});
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;