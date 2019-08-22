import React, { Component } from 'react';
import Filter from '../components/Filter';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieoutSelected: 'both',
    }
  }

  handleClick = (e) => {
    this.setState({
      dieoutSelected: e.target.name
    })

    let dieoutFilter = null;
    if (e.target.name === 'dieout') {
      dieoutFilter = true;
    } else if (e.target.name === 'nodieout'){
      dieoutFilter = false;
    }
    console.log('died out filter ', dieoutFilter);
    this.props.handleFilter(dieoutFilter);
  }

  render() {
    return (
      <>
        <Filter handleClick={this.handleClick} dieoutSelected={this.state.dieoutSelected} />
      </>
    )
  }
}

export default FilterContainer;