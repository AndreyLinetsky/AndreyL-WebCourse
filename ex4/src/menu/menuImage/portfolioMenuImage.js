import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menuImage.css';

class PortfolioMenuImage extends Component {
  render() {
    return (
      <div className='imageContainer'>
        <img src={this.props.src} alt='' className='menuImage' />
      </div>
    );
  }
}

PortfolioMenuImage.PropTypes = {
  src: PropTypes.string
}

export default PortfolioMenuImage;

