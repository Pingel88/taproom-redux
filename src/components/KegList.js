import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          whenRemovePintClicked={props.onClickingRemovePint}
          name={keg.name}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsRemaining={keg.pintsRemaining}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingRemovePint: PropTypes.func
};

export default KegList;