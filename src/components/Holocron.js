import React, {Component} from 'react'
import Book from './Book'
import Axios from 'axios'
// import axios from 'axios'

export default class Holocron extends Component {
    constructor() {
        super()
        this.state = {
            book: []
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
        .get('/api/book')
        .then(res => {
            this.setState({
                book: res.data
            })
        })
    }

    amendInfo(id, body) {
        axios
        .put(`./archives`)
    }
}