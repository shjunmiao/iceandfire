import React, { Component } from 'react';
import { getHouses } from '../api';
import Button from 'react-bootstrap/Button';
import HouseCardList from '../components/HouseCardList';

const PAGE_SIZE = 5;

class HouseViewer extends Component {
  state = {
    isLoading: true,
    hasMore: false,
    hasError: false,
    houseList: [],
    page: 1,
  }

  handleFilter = (e) => {
    getHouses({page: 1, pageSize: PAGE_SIZE, hasDiedout: 'hasDiedOut'}, this.handleGetHouses, this.handleGetHousesError);
  }

  handleShowMore = () => {
    getHouses({page: this.state.page, pageSize: PAGE_SIZE}, this.handleGetHouses, this.handleGetHousesError);
  };

  handleGetHouses = (houses) => {
    this.setState((prevState) => ({
        hasMore: houses.length === PAGE_SIZE,
        houseList: prevState.houseList.concat(houses),
        isLoading: false,
        page: prevState.page + 1,
      }
    ));
  }

  handleGetHousesError = (e) => {
    this.setState({
      hasError: true,
      houseList: [],
      page: 1,
      hasMore: false,
    });
  }

  componentDidMount() {
    getHouses({page: this.state.page, pageSize: PAGE_SIZE }, this.handleGetHouses, this.handleGetHousesError);
  }

  render() {
    const { isLoading, hasError, houseList } = this.state;

    if(hasError) {
      return (
        <div>Sorry, something wrong ...</div>
      )
    }

    if(isLoading) {
      return (
        <div>
          Loading ...
        </div>
      )
    }

    return (
      <div className="container-fluid mt-5">
        <HouseCardList houseList={houseList} />
        {this.state.hasMore ?
          <div className="text-center mb-5"><Button variant="link" className="mt-3" onClick={this.handleShowMore}>Show More...</Button></div>: ''}
      </div>
    )
  }
};

export default HouseViewer;