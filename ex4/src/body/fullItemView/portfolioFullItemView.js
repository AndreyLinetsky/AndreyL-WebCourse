import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './fullItem.css'

class PortfolioFullItemView extends Component {
  render() {
    return (
      <div className='fullItemContainer'>
        <div className='fullItemImageContainer'>
          <img className='fullItemImage' src={this.props.item.url} alt='' />
        </div>
        <div className='fullItemTitle'>{this.props.item.title}</div>
        <div className='fullItemDescription'>{this.props.item.description}</div>
        <button
          className='closeButton'
          onClick={() => this.props.menuHandler('listView')}>
          Close
          </button>
      </div>
    );
  }
}

PortfolioFullItemView.PropTypes = {
  item: PropTypes.object,
  menuHandler: PropTypes.func
}

export default PortfolioFullItemView;
