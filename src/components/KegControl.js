import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, pintsRemaining, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    this.setState({
      selectedKeg: selectedKeg
    })
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
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

    if (this.state.selectedKeg != null) {
      currentlyVisibleState =
      <KegDetail
        keg={this.state.selectedKeg}
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
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;