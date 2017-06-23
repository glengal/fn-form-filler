import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import style from './App.css';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { todos, actions, tab, fillAction } = this.props;


    console.log('app tab', tab);

    return (
      <div className={style.normal}>
        <Header fillAction={fillAction} />
        {/* <div>
          {tab.url}
        </div>
        <MainSection todos={todos} actions={actions} /> */}
      </div>
    );
  }
}
