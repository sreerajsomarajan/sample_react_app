import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

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
        <Form inline>
          <FormControl className="clock-input" placeholder="New date" onChange={ event => this.setState({ newDeadLine: event.target.value }) }/>
          <Button onClick={ () => this.changeDeadline() }>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
