import React, { Component } from 'react';
import PortfolioMenu from './menu/portfolioMenu.js';
import PortfolioBody from './body/portfolioBody.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'listView'
    };
  }

  changeView(viewName) {
    this.setState({ currentView: viewName });
  }

  render() {
    return (
      <div>
        <PortfolioMenu menuHandler={this.changeView.bind(this)} />
        <PortfolioBody view={this.state.currentView} menuHandler={this.changeView.bind(this)} />
      </div>
    );
  }
}

export default App;
