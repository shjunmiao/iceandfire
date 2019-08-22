import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const HouseCard = (props) => {
  const {
    name,
    region,
    coatArmsDesc,
    isDiedOut,
  } = props;

  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        Region: {region}
        Coat of Arms: {coatArmsDesc}
      </Card.Body>
    </Card>
  )
};

HouseCard.propTypes = {
  name: PropTypes.string,
  region: PropTypes.string,
  coatArmsDesc: PropTypes.string,
  isDiedOut: PropTypes.bool,
};

export default HouseCard;
