import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import InfoRow from '../InfoRow';
import diedOutIcon from '../../images/diedout.svg';
import notDiedOutIcon from '../../images/nodiedout.svg';
import '../HouseCard/style/housecard.scss';

const HouseCard = (props) => {
  const { house, handleModal } = props;
  const {
    name,
    region,
    coatOfArms,
    diedOut,
  } = house;

  const diedOutStatusIcon = diedOut !== '' ? diedOutIcon : notDiedOutIcon;
  const diedOutStatusIconTitle = diedOut !== '' ? 'Died out' : 'Not died out';
  return (
    <Card className="housecard mx-3" onClick={handleModal}>
      <Card.Title className="mt-4 mx-2 text-center">
        {name}
      </Card.Title>
      <Card.Body className="mx-4">
        <div>
          <span className="h6">Region:</span> {region || 'N/A'}
        </div>
        <InfoRow label="DiedOut">
          <Image src={diedOutStatusIcon} title={diedOutStatusIconTitle} className="icon__diedout" />
        </InfoRow>
        <div className="mt-2">
          <div className="h6 mb-0">Coat of Arms description: </div>
          <p>{coatOfArms || 'N/A'}</p>
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
