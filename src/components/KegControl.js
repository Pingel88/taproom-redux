import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, remainingPints, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      remainingPints: remainingPints,
      id: id
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = 'Return to Keg List';
    } else {
      currentlyVisibleState =
      <KegList
        kegList={this.state.mainKegList}
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

KegControl = connect()(KegControl);

export default KegControl;