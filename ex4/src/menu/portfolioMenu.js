import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menu.css';
import PortfolioMenuImage from './menuImage/portfolioMenuImage';
import PortfolioMenuNavigation from './menuNavigationLinks/portfolioMenuNavigation';
import PortfolioMenuSocialLinks from './menuSocialLinks/portfolioMenuSocialLinks';
import menuImage  from './assets/menulogo.svg'

class PortfolioMenu extends Component {
  render() {
    return (
      <div className="menuContainer">
        <PortfolioMenuImage src={menuImage} />
        <PortfolioMenuNavigation menuHandler={this.props.menuHandler} />
        <PortfolioMenuSocialLinks />
      </div>
    );
  }
}

PortfolioMenu.PropTypes = {
  menuHandler: PropTypes.func
}

export default PortfolioMenu;
