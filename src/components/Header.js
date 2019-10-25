import React, {Component} from 'react'

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="page-title">Rob's Holocron</div>
                <nav>
                    <input type="text" className="input" placeholder="Find an Entry" />
                </nav>
            </header>
        )
    }
}