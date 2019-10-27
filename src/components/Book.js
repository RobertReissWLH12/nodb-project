import React, {Component} from 'react'

export default class Book extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            title: '',
            author: '',
            pages: 0,
            characters: [],
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

    toggleDelete() {
        this.setState({
            destroyToggle: !this.state.destroyToggle
        })
        if (this.state.destroyToggle && this.state.characters) {
            this.props.destroyBookFn(this.props.id)
        }
    }

    render() {
        return (
            <div>
                <div>
                     <button onClick={() => this.destroyBook(this.props.id)}>Destroy This Entry!</button>
                </div>
                <div>
                    <button onClick={() => this.amendInfo(this.props.id)}>Amend This Entry</button>
                </div>
            </div>
        )
    }
    
}