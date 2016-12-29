import React, { Component } from 'react';
import AnimalLister from './AnimalLister';
import Immutable from 'immutable';
import Reducer from './reducer';
import './App.css';

class App extends Component {
  state = Reducer(undefined, {}).toJS();

  render() {
    console.log(this.state);
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

  dispatch = (action) => {
    this.setState(Reducer(Immutable.fromJS(this.state), action).toJS());
    console.log(this.state);
  };
}

export default App;
