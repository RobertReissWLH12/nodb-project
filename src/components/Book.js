import React, {Component} from 'react'

export default class Book extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            pages: 0,
            characters: []
        }
    }

    toggleEdit() {
        this.setState({
            editToggle: !this.state.editToggle
        })
            if (this.state.editToggle && this.state.entryInfo) {
                this.props.amendInfoFn(this.props.entryObj.id,
                    {title: this.state.title},
                    {author: this.state.author},
                    {pages: this.state.pages},
                    {characters: this.state.characters})
            }
    }

    render() {
        return (
            <book>
                
            </book>
        )
    }
    
}