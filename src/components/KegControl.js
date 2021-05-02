import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.deselectKeg();
      dispatch(action);
    } else {
      const action2 = a.toggleForm();
      dispatch(action2);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch, mainKegList } = this.props;
    const action = a.selectKeg(id, mainKegList);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
  }

  handleRemovingPint = (id) => {
    const { dispatch } = this.props;
    const action = a.removePint(id);
    dispatch(action);
  }    

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.selectedKeg != null) {
      currentlyVisibleState =
      <KegDetail
        keg={this.props.selectedKeg}
        onClickingDelete={this.handleDeletingKeg} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = 'Return to Keg List';
    } else {
      currentlyVisibleState =
      <KegList
        kegList={this.props.mainKegList}
        onKegSelection={this.handleChangingSelectedKeg}
        onClickingRemovePint={this.handleRemovingPint} />;
      buttonText = 'Add Keg';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;