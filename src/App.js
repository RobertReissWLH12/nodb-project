import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Holocron from './components/Holocron'
import axios from 'axios'
// import archives from './archives.json'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      archives: [],
      newBooks: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateArray = this.updateArray.bind(this)
  }

  componentDidMount() {
    axios
    .get('/api/archives')
    .then(res => {
        this.setState({
            archives: res.data
        })
    })
}

  handleChange(e) {
    console.log(e.target.value);
    let update = () => {
         let filteredResults = this.state.archives.filter(entry => entry.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
         console.log(filteredResults)
         this.setState({
           newBooks: filteredResults
         })
       }
    
      this.setState({
        searchTerm: e.target.value
      }, 
      
      () => update())


            
      
  }

    updateArray(arr){
      this.setState({
        newBooks: arr
      })
    }


  render() {
    return (
      <div className="App">
        <Header 
        handleChange = {this.handleChange}
        />
        {this.state.newBooks.map(el => (
        <Holocron
        // searchTerm = {this.state.searchTerm}
        // archives = {this.state.archives}
        key={el.id}
        id={el.id}
        data={el}
        updateArray = {this.updateArray}
        />
        ))}
      </div>
    );
  }
}



