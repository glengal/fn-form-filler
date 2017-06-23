import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header>
        <h1>FN Filler</h1>
        <button
          onClick={() => {
            console.log('button clicked');
            this.props.fillAction();
          }}
        >Click Here</button>
      </header>
    );
  }
}
