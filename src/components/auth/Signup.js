import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div>
                <h1>Singup</h1>
                <div className="signupForm">
                <form>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Company name"></input>
                    <br/>
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Company Address"></input>
                    <br/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Company email"></input>
                    <br/>
                    <label>Passowrd</label>
                    <input type="password" name="password"  placeholder="password"></input> 
                </form>
                </div>
            
            </div>
        )
    }
}

export default Signup
