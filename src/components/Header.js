import React, {Component} from 'react'

export default class Header extends Component {
    render () {
        return (
            <header>
                <div class="page-title">Rob's Holocron</div>
                <nav>
                    <input type="text" 
                    className="input"
                    onChange={(ev) => this.props.handleChange(ev)} 
                    placeholder="Find an Entry" />
                </nav>
                <h2 class="relevant-entries">Relevant Entries</h2>
            </header>
        )
    }
}