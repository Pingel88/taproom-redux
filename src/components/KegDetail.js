import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{keg.name} Details</h1>
      <p>Made by: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>Alcohol content: {keg.alcoholContent}%</p>
      <p>Remaining Pints: {keg.pintsRemaining}</p>
      <button onClick={ ()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default KegDetail;