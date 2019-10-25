import React, {Component} from 'react'
import Book from './Book'
import axios from 'axios'

export default class Holocron extends Component {
    constructor() {
        super()
        this.state = {
            // book: []
            archives: []
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
        .put(`./archives/${id}`, body)
        .then(res => {
            this.setState({
                archives: res.data
            })
        })
    }

    destroyBook(id) {
        axios
        .delete(`/api/archives/${id}`
        .then(res => {
            this.setState({
                archives: res.data
            })
        }))
    }

    render() {
        return (
            <div className="holocron">
                <h2>Holocron</h2>
                {/* {this.props.archives.map(el => (
                    <Book
                    entryObj={el} key={el.id}
                    amendInfoFn={this.amendInfo}
                    destroyBookFn={this.destroyBook}
                    />
                ))} */}
            </div>
        )
    }
}