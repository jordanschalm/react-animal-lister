import React, { Component } from 'react';
import AnimalLister from './AnimalLister';
import Reducer from './reducer';
import './App.css';

export default class App extends Component {
  // Initialize with the reducer's inital state
  state = Reducer(undefined, {});

  render() {
    const { animals, selectedIndex, textInput } = this.state;
    return (
      <div className="container">
        <div className="left">
          <h1 className="fav-animal-prefix">
            My Favourite Animal is:
          </h1>
          <h2 className="fav-animal">{animals[selectedIndex]}</h2>
        </div>
        <div className="right">
          <AnimalLister
            animals={animals}
            dispatch={this.dispatch}
            selectedIndex={selectedIndex}
            textInput={textInput}/>
        </div>
      </div>
    );
  }

  // This essentially does the same thing as Redux's dispatch method, just using
  // this component's state rather than external state.
  dispatch = (action) => {
    this.setState(Reducer(this.state, action));
  };
}
