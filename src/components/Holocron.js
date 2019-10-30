import React, {Component} from 'react'
import Book from './Book'
import axios from 'axios'

export default class Holocron extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // book: []
            archives: [],
            editToggle: false,
            editedValue: props.data.title 
            // title: '',
            // author: '',
            // pages: 0,
            // characters: [],
            // img: ''
        }
        this.amendInfo = this.amendInfo.bind(this)
        // this.amendTitle = this.amendTitle.bind(this)
        // this.amendAuthor = this.amendAuthor.bind(this)
        // this.amendPages = this.amendPages.bind(this)
        // this.amendCharacters = this.amendCharacters.bind(this)
        this.destroyBook = this.destroyBook.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
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

    amendInfo(id, body) {
        console.log("hit", id, body)
        axios
        .put(`/api/archives/${id}`, {title:body})
        .then(res => {
            this.props.updateArray(res.data)
            this.setState({
                archives: res.data,
                editToggle: false
            })
        }).catch(console.log("err"))
    }

    toggleEdit() {
        this.setState({
            editToggle: !this.state.editToggle
        })
            if (this.state.editToggle && this.state.entryInfo) {
                this.props.amendInfoFn(this.props.characters.id,
                    {title: this.state.title},
                    )
            }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            editedValue: e.target.value
        })
    }

    destroyBook(id) {
        console.log(id)
        axios
        .delete(`/api/archives/${id}`)
        .then(res => {
            this.props.updateArray(res.data)
            this.setState({
                archives: res.data
            })
        }).catch(console.log("err"))
    }

    // destroyBook = () => {
    //     console.log(this.state.id)
    //     alert("Button Clicked!")
    //     this.setState({
    //         destroyToggle: !this.state.destroyToggle
    //     })
    //     if (this.state.destroyToggle && this.state.characters) {
    //         this.props.destroyBook(this.props.id)
    //     }
    // }

    render() {
        // characters.map(this.props.data.characters)
        console.log(this.props.data.characters)
        return (
            <div className="results-container">
            <div className="results-text">
                {this.state.editToggle ? <input onChange={(ev) => this.handleChange(ev)} value={this.state.editedValue}></input> : <div className="book-title">{this.props.data.title}</div>}
                    <label for="">by:</label> 
                <div>
                    {this.props.data.author.first} {this.props.data.author.last}
                    </div>
                <div>Pages: {this.props.data.pages}</div>
                {/* <div>Major Characters: {this.props.data.characters}</div> */}
                <Book 
                toggleEdit={this.toggleEdit}
                editToggle={this.state.editToggle}
                amendInfo={this.amendInfo}
                destroyBook={this.destroyBook}
                editedValue={this.state.editedValue}
                id={this.props.id}
                />
            </div>
            <div>
            <img src={this.props.data.image} className="results-image" alt="" className="searchImage"/>
            </div>
            </div>
        )
    }
}