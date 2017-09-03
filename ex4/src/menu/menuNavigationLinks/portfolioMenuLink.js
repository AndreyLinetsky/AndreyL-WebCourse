import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PortfolioMenuLink extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.decorationHandler(this.props.viewName);
          this.props.menuHandler(this.props.viewName)
        }}
        className={classNames({ 'decoratedLink': this.props.isSelected })}>
        {this.props.text}
      </div>
    );
  }
}

PortfolioMenuLink.PropTypes = {
  menuHandler: PropTypes.string,
  viewName: PropTypes.string,
  text: PropTypes.text,
  decorationHandler: PropTypes.func,
  isSelected: PropTypes.bool
}

export default PortfolioMenuLink;
