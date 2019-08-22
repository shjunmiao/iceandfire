import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InfoRow from '../InfoRow';

const HouseCardModal = (props) => {
  const { house, onHide, heir, overlord, swornMembers } = props;
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            House Extra Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="mb-3">{house.name}</h5>
          {house.words ? <InfoRow label="Words">{house.words}</InfoRow>  : ''}
          {heir ? <InfoRow label="Heir">{heir}</InfoRow>  : ''}
          {(house.ancestralWeapons && house.ancestralWeapons.join('')) ? (<InfoRow label="Ancestral Weapons" nextLine>{house.ancestralWeapons}</InfoRow>) : ''}
          {overlord ? <InfoRow label="Overlord">{overlord}</InfoRow> : ''}
          {swornMembers && swornMembers.length > 0 ? <InfoRow label="Sworn Members">{swornMembers.join(', ')}</InfoRow>  : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
};

export default HouseCardModal;
