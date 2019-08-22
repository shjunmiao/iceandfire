import React, { Component } from 'react';
import HouseCard from '../components/HouseCard';
import HouseCardModal from '../components/HouseCardModal';
import { get } from '../api';

class HouseCardContainer extends Component {
  state = {
    showModal: false,
    overlord: '',
    swornMembers: [],
    heir: '',
  }

  openModal = () => {
    this.setState({
      showModal: true,
    })
  }

  onHide = () => {
    this.setState({
      showModal: false
    })
  }

  handleOverLordResp = (house) => {
    this.setState({
      overload: house.name,
    })
  }
  handleCharsResp = (char) => {
    const name = char.name || char.aliases[0];
    this.setState(prevState => ({
      swornMembers: [...prevState.swornMembers, name],
    }));
  }

  handleHeirResp = (char) => {
    this.setState({
      heir: char.name,
    })
  }

  handleRespError = (e) => {
    // TODO: handle error
  }

  componentDidMount = () => {
    const { house } = this.props;
    const { overlord, swornMembers, heir } = house;
    if(overlord) {
      get(overlord, this.handleOverLordResp, this.handleRespError);
    }
    if(swornMembers && swornMembers.length > 0) {
      swornMembers.map(char => get(char, this.handleCharsResp, this.handleRespError));
    }

    if(heir) {
      get(heir, this.handleHeirResp, this.handleRespError);
    }

  }

  render() {
    const { house } = this.props;
    return (
      <>
        <HouseCard house={house} handleModal={this.openModal} />
        <HouseCardModal
          show={this.state.showModal}
          onHide={this.onHide}
          house={house}
          overload={this.state.overlord}
          heir={this.state.heir}
          swornmembers={this.state.swornMembers} />
      </>
    )
  };
}

export default HouseCardContainer;