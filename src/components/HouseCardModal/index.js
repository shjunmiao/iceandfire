import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
            Extra Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{house.name}</h5>
          {house.words ? <div><span className="h6">Words: </span> {house.words}</div>  : ''}
          {heir ? <div><span className="h6">Heir: </span> {heir}</div>  : ''}
          {(house.ancestralWeapons && house.ancestralWeapons.join('')) ? (<div><div className="h5">Ancestral Weapons: </div> {house.ancestralWeapons}</div>)  : ''}
          {overlord ? <div><span className="h6">Overlord: </span> {overlord}</div>  : ''}
          {swornMembers && swornMembers.length > 0 ? <div><span className="h6">Sworn Members: </span> {swornMembers.join(', ')}</div>  : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
};

export default HouseCardModal;
