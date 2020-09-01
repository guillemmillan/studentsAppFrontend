import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
 
                <h1>Login</h1>
                <div className="loginForm">
                    <form>
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

export default Login
