import React, { Component } from 'react'
import AuthService from '../../auth/auth-service'
import { Link } from 'react-router-dom';
import BHome from '../BHome';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
            .then(response => {
                this.setState({ username: "", password: "" });
                this.props.callback(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {

        return (
            <div className="login">
                <BHome/>
                <h1>Login</h1>
                <div className="loginForm">
                    <form className="loginFormStyle" onSubmit={this.handleFormSubmit}>
                        <label>Username</label>
                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange}/>
                        <br/>
                        <label>Passowrd</label>
                        <input type="password" value={this.state.password} name="password"  placeholder="password" onChange={this.handleChange}/>
                        <br/>
                        <input value="Login" type="submit"/>
                        </form>
                    <p>
                    Don't have account?
                    <Link to={"/signup"}> Signup</Link>
                </p>
                </div>
            </div>
        )
    }
}

export default Login
