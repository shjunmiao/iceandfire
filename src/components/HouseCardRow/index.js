import React from 'react';
import HouseCard from '../HouseCard';
import './style/housecardrow.scss';

const HouseCardRow = ({houseList}) => {
  console.log('house row list', houseList);
  if(houseList) {
    return (
      <div className="housecardrow mt-5">
        {houseList.map(house => <HouseCard house={house} />)}
      </div>
    )
  }else {
    return '';
  }
}

export default HouseCardRow;

