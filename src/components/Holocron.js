import React, {Component} from 'react'
import Book from './Book'
import axios from 'axios'

export default class Holocron extends Component {
    constructor() {
        super()
        this.state = {
            // book: []
            archives: [],
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
        axios
        .put(`/api/archives/${id}`, body)
        .then(res => {
            this.setState({
                archives: res.data
            })
        })
    }

    destroyBook(id, title) {
        console.log(id, title)
        alert("Button Clicked!")
        axios
        .delete(`/api/archives/${id}`, {id, title})
        .then(res => {
            this.setState({
                archives: res.data
            })
        })
    }

    // destroyBook = () => {
    //     console.log(this.state.id)
    //     alert("Button Clicked!")
        // this.setState({
        //     destroyToggle: !this.state.destroyToggle
        // })
        // if (this.state.destroyToggle && this.state.characters) {
        //     this.props.destroyBook(this.props.id)
        // }
    // }

    render() {
        console.log(this.state)
        return (
            <div className="holocron">
                {/* {this.props.archives.map(el => (
                    <Book
                    entryObj={el} key={el.id}
                    amendInfoFn={this.amendInfo}
                    destroyBook={this.destroyBook}
                    />
                ))} */}
                <div>Title: {this.props.data.title}</div>
                {/* <div>Author: {this.props.data.author}</div> */}
                {/* <div>Pages: {this.props.data.pages}</div> */}
                {/* <div>Major Characters: {this.props.data.characters}</div> */}
                <img src={this.props.data.image} alt="" className="searchImage"/>
                <Book amendInfoFn={this.amendInfo}
                destroyBook={this.destroyBook}
                />
            </div>
        )
    }
}