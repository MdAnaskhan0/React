import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Count: 0 
        };
    }

    incrementCount =()=>{
        this.setState({
            Count : this.state.Count + 1
        })
    }

    decrementCount=()=>{
        this.setState({
            Count : this.state.Count - 1
        })
    }
    

    
    render() {
        const {Count} = this.state
        return (
            <div className='CounterApp'>
                <p>Count: {Count}</p>
                <div className="button">
                <button  onClick={this.incrementCount}>+</button>
                <button onClick={this.decrementCount} disabled = {Count === 0 ? true : false}>-</button>
                </div>
            </div>
        );
    }
}
