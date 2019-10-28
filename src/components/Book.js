import React, {Component} from 'react'
// import axios from 'axios'

export default class Book extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            title: '',
            author: '',
            pages: 0,
            characters: [],
            img: '',
            editToggle: false,
            destroyToggle: false
        }
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

    // destroyBook = () => {
    //     console.log(this.state.id)
    //     alert("Button Clicked!")
    //     // this.setState({
    //     //     destroyToggle: !this.state.destroyToggle
    //     // })
    //     // if (this.state.destroyToggle && this.state.characters) {
    //     //     this.props.destroyBook(this.props.id)
    //     // }
    // }

    render() {
        
        return (
            <div>
                <div>
                     <button onClick={() => this.props.destroyBook(this.props.id)}>Destroy This Entry!</button>
                </div>
                <div>
                    <button onClick={() => this.props.amendInfo(this.props.id, this.props.title)}>Amend This Entry</button>
                </div>
            </div>
        )
    }
    
}