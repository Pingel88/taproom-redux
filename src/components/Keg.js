import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h5>{props.name}</h5>
        <p>${props.price}<br/>
          ABV: {props.alcoholContent}%<br/>
          Remaining: {parseInt(props.pintsRemaining/124*100)}%</p>
      </div>
      <button onClick={() => props.whenRemovePintClicked(props.id)}>Remove Pint</button>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenRemovePintClicked: PropTypes.func
};

export default Keg;