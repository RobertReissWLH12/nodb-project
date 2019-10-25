import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Holocron from './components/Holocron'
// import Archives from './Archives'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
        handleChange = {this.handleChange}
        />
        <Holocron />
        {/* <Book /> */}
      </div>
    );
  }
}



