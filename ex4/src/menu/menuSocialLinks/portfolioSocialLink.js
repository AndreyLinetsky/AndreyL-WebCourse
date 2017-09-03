import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menuSocial.css';

class PortfolioSocialLink extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        <img src={this.props.imageSrc} alt='' className='socialLink' />
      </a>
    );
  }
}

PortfolioSocialLink.PropTypes = {
  url: PropTypes.string,
  imageSrc: PropTypes.string
}

export default PortfolioSocialLink;
