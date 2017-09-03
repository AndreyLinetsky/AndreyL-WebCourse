import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deleteImage from '../assets/delete.png';
import './listItem.css';

class PortfolioItem extends Component {
  render() {
    return (
      <div
        className='listItem'
        onClick={() => this.props.menuHandler(`fullItemView/${this.props.item.id}`)}>
        <div className='imageContainer'>
          <img className='itemImage' src={this.props.item.url} alt='' />
        </div>
        <div className='itemTitle'>{this.props.item.title}</div>
        <div>
          <img
            className='deleteButton'
            src={deleteImage}
            alt=''
            onClick={(event) => { event.stopPropagation(); this.props.removeItem(this.props.item.id) }}
          />
          <button
            className='editButton'
            onClick={(event) => { event.stopPropagation(); this.props.menuHandler(`editItem/${this.props.item.id}`) }}>Edit</button>
        </div>
      </div>
    );
  }
}

PortfolioItem.PropTypes = {
  item: PropTypes.object,
  menuHandler: PropTypes.func,
  removeItem: PropTypes.func
}

export default PortfolioItem;
