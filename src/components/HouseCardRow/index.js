import React from 'react';
import HouseCard from '../HouseCard';

const HouseCardRow = ({houseList}) => {
  console.log('house row list', houseList);
  if(houseList) {
    return (
      <div>
        {houseList.map(house => <HouseCard house={house} />)}
      </div>
    )
  }else {
    return '';
  }
}

export default HouseCardRow;

