import React, { Component } from 'react';
import Clock from './clock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadLine: ''
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadLine
    })
  }

  render() {
    return (
      <div className="app">
        <div className="master-counter">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <div className="clock-input">
          <input type="text" placeholder="New date"
            onChange={ event => this.setState({ newDeadLine: event.target.value })}
          ></input>
          <button onClick={ () => this.changeDeadline() }>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
