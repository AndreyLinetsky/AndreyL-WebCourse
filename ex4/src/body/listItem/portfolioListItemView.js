import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './portfolioItem';
import './listItem.css';

class PortfolioListItemView extends Component {
  render() {
    return (
      <div className='listItemsContainer'>
        {this.props.items.map(item =>
          <PortfolioItem
            key={item.id}
            item={item}
            removeItem={this.props.removeItem}
            menuHandler={this.props.menuHandler} />
        )}
      </div>
    );
  }
}

PortfolioListItemView.PropTypes = {
  items: PropTypes.object,
  menuHandler: PropTypes.func,
  removeItem: PropTypes.func
}

export default PortfolioListItemView;

