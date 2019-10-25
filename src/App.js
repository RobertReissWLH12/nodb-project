import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Holocron from './components/Holocron'
import archives from './Archives.json'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      archives: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value);
    
      this.setState({
        searchTerm: e.target.value
      }, 
      
      () => update());

     var update = () => {

          let filteredResults = archives.filter(entry => entry.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
          console.log(filteredResults)
          this.setState({
            archives: filteredResults
          })
        }

        
      
  }

  render() {
    return (
      <div className="App">
        <Header 
        handleChange = {this.handleChange}
        />
        <Holocron 
        searchTerm = {this.state.searchTerm}
        archives = {this.state.archives}
        />
      </div>
    );
  }
}



