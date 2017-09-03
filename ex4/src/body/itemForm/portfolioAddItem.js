import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItemForm from './portfolioItemForm';

class PortfolioAddItem extends Component {
  render() {
    return (
      <div>
        <PortfolioItemForm
          formHandler={this.props.addItem}
          isEdit={false}
          item={null} />
      </div>
    );
  }
}

PortfolioAddItem.PropTypes = {
  addItem: PropTypes.func
}

export default PortfolioAddItem;

