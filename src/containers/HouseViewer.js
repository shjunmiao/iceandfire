import React, { Component } from 'react';
import { getHouses } from '../api';
import Button from 'react-bootstrap/Button';
import HouseCardList from '../components/HouseCardList';
import FilterContainer from '../containers/FilterContainer';

const PAGE_SIZE = 5;

class HouseViewer extends Component {
  state = {
    isLoading: true,
    hasMore: false,
    hasError: false,
    hasDiedOut: null,
    houseList: [],
    page: 1,
  }

  handleFilter = (hasDiedOut) => {
    this.setState({hasDiedOut});
    getHouses({page: 1, pageSize: PAGE_SIZE, hasDiedOut: hasDiedOut }, this.handleGetHouses, this.handleGetHousesError, false);
  }

  handleShowMore = () => {
    getHouses({page: this.state.page, pageSize: PAGE_SIZE, hasDiedOut:this.state.hasDiedOut}, this.handleGetHouses, this.handleGetHousesError, true);
  };

  handleGetHouses = (houses, isFromShowMore) => {
    this.setState((prevState) => ({
        hasMore: houses.length === PAGE_SIZE,
        houseList: isFromShowMore ? prevState.houseList.concat(houses) : houses,
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
      <div className="mt-5">
        <FilterContainer handleFilter={this.handleFilter} />
        <HouseCardList houseList={houseList} />
        {this.state.hasMore ?
          <div className="text-center mb-5"><Button variant="link" className="mt-3" onClick={this.handleShowMore}>Show More...</Button></div>: ''}
      </div>
    )
  }
};

export default HouseViewer;