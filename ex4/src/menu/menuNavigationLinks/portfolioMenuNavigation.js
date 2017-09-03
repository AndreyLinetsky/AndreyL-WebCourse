import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioMenuLink from './portfolioMenuLink'
import './menuNavigation.css';

class PortfolioMenuNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decoratedMenu: 'listView'
    };
  }

  setTextDecoration(viewName) {
    this.setState({ decoratedMenu: viewName });
  }

  render() {
    return (
      <ul className='menuNavigation'>
        <li>
          <PortfolioMenuLink
            menuHandler={this.props.menuHandler}
            decorationHandler={this.setTextDecoration.bind(this)}
            isSelected={this.state.decoratedMenu === 'listView'}
            viewName='listView'
            text='View Items'
            key='listView' />
        </li>
        <li>
          <PortfolioMenuLink
            menuHandler={this.props.menuHandler}
            decorationHandler={this.setTextDecoration.bind(this)}
            isSelected={this.state.decoratedMenu === 'addItem'}
            viewName='addItem'
            text='Add Item'
            key='addItem' />
        </li>
        <li>
          <PortfolioMenuLink
            menuHandler={this.props.menuHandler}
            decorationHandler={this.setTextDecoration.bind(this)}
            isSelected={this.state.decoratedMenu === 'about'}
            viewName='about'
            text='About'
            key='about' />
        </li>
      </ul>
    );
  }
}

PortfolioMenuNavigation.PropTypes = {
  menuHandler: PropTypes.func
}

export default PortfolioMenuNavigation;

