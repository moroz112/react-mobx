import React, { Component } from 'react';
import { observer } from 'mobx-react';
import logo from './logo.svg';
import DevTools from 'mobx-react-devtools';
import './App.css';

@observer
export default class App extends Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }
	createNew(e) {
		if(e.which === 13) {
			this.props.store.createNew(e.target.value)
		}
	}

  render() {

    const {filter, todoList} = this.props.store;
    return (

      <div className="App">
        <ul>
          {todoList.map( (todo, index) =>
              <li key={index}> {todo}</li>
        )}
        </ul>
        <div>{filter}</div>
        <div className="filter">
          <label>Filter</label>
          <input value={filter} onChange={this.filter.bind(this)}/>
        </div>
        <div className="create">
          <input onKeyPress={this.createNew.bind(this)}/>
        </div>
          <DevTools/>
      </div>
    );
  }
}
