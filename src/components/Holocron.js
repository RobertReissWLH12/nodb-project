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
        .put(`/api/archives/${id}`, body)
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
                {/* {this.props.archives.map(el => (
                    <Book
                    entryObj={el} key={el.id}
                    amendInfoFn={this.amendInfo}
                    destroyBookFn={this.destroyBook}
                    />
                ))} */}
                <p>
                {this.props.data.title},
                {/* {this.props.data.author}] */}
                {/* {this.props.data.pages}, */}
                {/* {this.props.data.characters} */}
                </p>
                {/* <img src={this.props.data.image} alt=""/> */}
                <Book amendInfoFn={this.amendInfo}
                destroyBookFn={this.destroyBook}
                />
            </div>
        )
    }
}