import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
 
                <h1>Login</h1>
                <div className="loginForm">
                    <form>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username"></input>
                        <br/>
                        <label>Passowrd</label>
                        <input type="password" name="password"  placeholder="password"></input>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
