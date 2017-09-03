import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './itemForm.css'

class PortfolioItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      description: '',
      title: ''
    };
  }

  componentWillMount() {
    if (this.props.isEdit) {
      this.setState({
        ...this.state,
        url: this.props.item.url,
        description: this.props.item.description,
        title: this.props.item.title
      })
    }
  }

  handleChange(event) {
    const fieldName = event.target.name;
    this.setState({ ...this.state, [fieldName]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const formParms = this.props.isEdit ?
      { ...this.state, id: this.props.item.id } : this.state;
    this.props.formHandler(formParms);
  }

  render() {
    return (
      <div className='itemFormContainer'>
        <h1 className='itemFormTitle'>{this.props.isEdit ? 'Edit Item' : 'Add Item'}</h1>
        <form className='itemForm' onSubmit={(event) => this.onSubmit(event)}>
          <div className='itemFormRow'>
            <span>Title:</span>
            <input required type="text" name='title' value={this.state.title} onChange={(event) => this.handleChange(event)} />
          </div>
          <div className='itemFormRow'>
            <span>Description:</span>
            <input type="text" name='description' value={this.state.description} onChange={(event) => this.handleChange(event)} />
          </div>
          <div className='itemFormRow'>
            <span>Url:</span>
            <input required type="text" name='url' value={this.state.url} onChange={(event) => this.handleChange(event)} />
          </div>
          <div className='itemFormRow'>
            <input className='formButton' type="submit" value={this.props.isEdit ? 'Edit' : 'Add'} />
          </div>
        </form>
      </div>
    );
  }
}

PortfolioItemForm.PropTypes = {
  item: PropTypes.object,
  formHandler: PropTypes.func,
  isEdit: PropTypes.bool
}

export default PortfolioItemForm;
