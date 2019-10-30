import React from 'react'
// import axios from 'axios'

export default function Book(props) {

    return (
        <div>
            <div>
                <button onClick={() => props.destroyBook(props.id)}>Destroy This Entry!</button>
            </div>
            {props.editToggle ? <button onClick={() => props.amendInfo(props.id, props.editedValue)}>Submit</button> : <button onClick={() => props.toggleEdit(props.id, props.title)}>Amend This Entry</button>}
        </div>
    )
}