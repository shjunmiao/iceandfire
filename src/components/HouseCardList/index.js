import React from 'react';
import HouseCardRow from '../HouseCardRow';
import { splitEvery } from 'ramda';

const HouseCardList = ({houseList}) =>{
  if(houseList) {
    return splitEvery(5, houseList).map(houseRowList => (<HouseCardRow houseList={houseRowList} />))
  } else {
    return '';
  }
}

export default HouseCardList;