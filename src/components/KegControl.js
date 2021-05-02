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
      const action = a.selectKeg();
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
    // const kegList = this.props.mainKegList;
    const action = a.selectKeg(id, mainKegList);
    // console.log(mainKegList[id].name);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleRemovingPint = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    const updatedKeg = {name: selectedKeg.name, brand: selectedKeg.brand, price: selectedKeg.price, alcoholContent: selectedKeg.alcoholContent, pintsRemaining: selectedKeg.pintsRemaining - 1, id: selectedKeg.id};
    const kegIndex = this.state.mainKegList.indexOf(selectedKeg);
    const startMainKegList = this.state.mainKegList.slice(0, kegIndex);
    const endMainKegList = this.state.mainKegList.slice(kegIndex + 1);
    const editedMainKegList = startMainKegList.concat(updatedKeg).concat(endMainKegList);
    if (selectedKeg.pintsRemaining > 0){
      this.setState({mainKegList: editedMainKegList});
    }
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