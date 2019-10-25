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
}