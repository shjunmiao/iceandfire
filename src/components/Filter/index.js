import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import '../Filter/style/filter.scss';

const Filter = (props) => {
  const { handleClick, dieoutSelected } = props;

  const noDieout = dieoutSelected === 'nodieout' ? 'primary' : 'light';
  const dieout = dieoutSelected === 'dieout' ? 'primary' : 'light';
  const dieoutboth = dieoutSelected === 'both' ? 'primary' : 'light';

  return (
    <div className='filter'>
      <div className="h5">Filter:</div>
      <div className="mx-3">
        <ButtonGroup aria-label="Filter">
          <Button size="sm" name="nodieout" variant={noDieout} onClick={handleClick}>Not Died Out</Button>
          <Button size="sm" name="dieout" variant={dieout} onClick={handleClick}>Died Out</Button>
          <Button size="sm" name="both" variant={dieoutboth} onClick={handleClick}>Both</Button>
        </ButtonGroup>
      </div>
    </div>
  )
};

export default Filter;