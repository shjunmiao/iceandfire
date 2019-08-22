import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import diedOutIcon from '../../images/diedout.svg';
import notDiedOutIcon from '../../images/nodiedout.svg';
import '../HouseCard/style/housecard.scss';

const HouseCard = (props) => {
  const {
    name,
    region,
    coatArmsDesc,
    diedOut,
  } = props.house;

  console.log('died out', diedOut);

  const diedOutStatusIcon = diedOut !== '' ? diedOutIcon : notDiedOutIcon;
  return (
    <Card className="housecard">
      <Card.Title className="mx-auto mt-4">
        {name}
      </Card.Title>
      <Card.Body className="mx-4">
        <div>
          <span className="h6">Region:</span> {region}
        </div>
        <div className="mt-2">
          <span className="h6">DiedOut: </span>
          <Image src={diedOutStatusIcon} className="icon__diedout" />
        </div>
        <div className="mt-2">
          <div className="h6 mb-0">Coat of Arms: </div>
          <p>{coatArmsDesc}</p>
        </div>
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
