import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import './body.css';
import PortfolioAbout from './about/portfolioAbout';
import PortfolioAddItem from './itemForm/portfolioAddItem';
import PortfolioEditItem from './itemForm/portfolioEditItem';
import PortfolioFullItemView from './fullItemView/portfolioFullItemView';
import PortfolioListItemView from './listItem/portfolioListItemView';
import CustomData from '../data/customData.json';

class PortfolioBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.setState({ items: CustomData })
  }

  addItem(newItem) {
    const { title, description, url } = newItem;
    this.setState({
      items: [...this.state.items, {
        title,
        description,
        url,
        id: _.uniqueId('item-')
      }]
    });
  }

  editItem(item) {
    const { id, title, description, url } = item;
    this.setState({
      items: this.state.items.map(item => item.id === id ?
        { ...item, title, url, description } : item)
    });
  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }

  render() {
    const viewData = this.props.view.split('/');
    return (
      <div className='bodyContainer'>
        {{
          'listView':
          <PortfolioListItemView
            items={this.state.items}
            menuHandler={this.props.menuHandler}
            removeItem={this.removeItem.bind(this)} />,
          'editItem':
          <PortfolioEditItem
            item={this.state.items.find(item => item.id === viewData[1])}
            editItem={this.editItem.bind(this)} />,
          'addItem':
          <PortfolioAddItem
            addItem={this.addItem.bind(this)} />,
          'fullItemView':
          <PortfolioFullItemView
            menuHandler={this.props.menuHandler}
            item={this.state.items.find(item => item.id === viewData[1])} />,
          'about':
          <PortfolioAbout />
        }[viewData[0]]}
      </div>
    );
  }
}

PortfolioBody.PropTypes = {
  menuHandler: PropTypes.func,
  view: PropTypes.string
}

export default PortfolioBody;
