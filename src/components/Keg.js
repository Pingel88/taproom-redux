import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <h4>${props.price}</h4>
        <p>{props.alcoholContent}%</p>
        <p>{props.pintsRemaining}</p>
        <hr/>
      </div>
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
  whenKegClicked: PropTypes.func
};

export default Keg;