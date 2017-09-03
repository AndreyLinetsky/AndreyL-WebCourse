import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItemForm from './portfolioItemForm';

class PortfolioEditItem extends Component {
  render() {
    return (
      <div>
        <PortfolioItemForm
          formHandler={this.props.editItem}
          isEdit={true}
          item={this.props.item} />
      </div>
    );
  }
}

PortfolioEditItem.PropTypes = {
  editItem: PropTypes.func,
  item: PropTypes.object
}

export default PortfolioEditItem;
