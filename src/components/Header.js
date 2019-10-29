import React, {Component} from 'react'
import axios from 'axios';

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            // title: '',
            // author: '',
            // pages: 0,
            // characters: [],
            // img: ''
        }
        this.chronicle = this.chronicle.bind(this)
    }

    chronicle(newBook){
        axios
        .post('/api/archives', this.state)
        .then(res => {
            this.setState({
                archives: res.data
            })
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newBook = {
            title: this.refs.title.value,
            author: this.refs.author.value,
            pages: this.refs.pages.value,
            characters: this.refs.characters.value
        }
        this.chronicle(newBook);
        e.preventDefault();
    }

    render () {
        return (
            <header>
                <div className="page-title">Rob's Holocron</div>
                <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet"></link>
                 <link rel="stylesheet"></link>
                <nav>
                    <input type="text" 
                    className="find-entry"
                    onChange={(ev) => this.props.handleChange(ev)} 
                    placeholder="Find an Entry..." />
                    {/* <div>
                     <button onClick={() => this.chronicle(this.props.id, this.props.title)}>Submit New Lore</button>
                    </div> */}
                <br />
                <div className="newEntry">Or Create a New Entry in the Holocron!</div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="big-container">
                        <div className="container1">
                            <div className="input-field1">
                                <input type="text" name="title" ref="title" />
                                <label htmlFor="title">Title of Manuscript</label>
                            </div>
                            <div className="input-field2">
                                <input type="text" name="author" ref="author" />
                                <label htmlFor="author">Author</label>
                            </div>
                        </div>
                        <div className="container2">
                            <div className="input-field3">
                                <input type="text" name="pages" ref="pages" />
                                <label htmlFor="pages">Number of Pages</label>
                            </div>
                            <div className="input-field4">
                                <input type="text" name="characters" ref="characters" />
                                <label htmlFor="characters">List of Major Characters</label>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.chronicle()} value="Enter Into the Holocron" className="btn-submit">Enter Into the Holocron</button>
                </form>
                </nav>
                <h2 className="relevant-entries">Relevant Entries</h2>
            </header>
        )
    }
}