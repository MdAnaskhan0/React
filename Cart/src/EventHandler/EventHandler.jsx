import React, { Component } from 'react'

export default class EventHandler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            onChangeValue : ''
        }
    }

    onChange=(e)=>{
        this.setState({
            onChangeValue : e.target.value
        }, ()=>{
            console.log(this.state.onChangeValue)
        })
        
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <p>{this.state.onChangeValue}</p>
            </div>
        )
    }
}
