import React from 'react';
import HouseCardContainer from '../../containers/HouseCardContainer';
import './style/housecardrow.scss';

const HouseCardRow = ({houseList}) => {
  if(houseList) {
    return (
      <div className="housecardrow mt-5">
        {houseList.map((house, index) => <HouseCardContainer key={`houseCard${index}`} house={house} />)}
      </div>
    )
  }else {
    return '';
  }
}

export default HouseCardRow;

