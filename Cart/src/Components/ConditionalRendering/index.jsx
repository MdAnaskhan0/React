import React, { Component } from 'react'
import Home from './Home'
import SignUP from './SignUP'



export default class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isSignin : true
        }
    }

    signUP = () =>{
        this.setState({
            isSignin : this.state.isSignin = false
        })
    }
    home = () =>{
        this.setState({
            isSignin : this.state.isSignin = true
        })
    }

    render() {
        const {isSignin} = this.state
        return(
            <div>
                {isSignin ? <Home/> : <SignUP/>} 

                <button onClick={this.signUP}>SignUp</button>
                <button onClick={this.home}>Home</button>
            </div>
        )
    }
}
