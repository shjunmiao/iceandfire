import React from 'react';
import Header from '../components/Header';
import HouseViewer from '../containers/HouseViewer';


const HomePage = () => (
  <div>
    <Header title='Games of Thrones' />
    <HouseViewer />
  </div>
)

export default HomePage;
