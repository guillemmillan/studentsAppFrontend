

import React, { Component } from 'react'
import BHome from '../BHome'
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
    }

    // recoger datos y modifica para ser enviados al back
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        this.service.signup(username, password)
            .then(response => {
                this.setState({
                    username: "",
                    password: ""
                });
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
            <div>
               <BHome/>
                <h1>Singup</h1>
                <div className="signupForm">
                <form onSubmit={this.handleFormSubmit}>
                   <label>Email:</label>
                        <input type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={e => this.handleChange(e)} />
                    <label>Username:</label>
                        <input type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={e => this.handleChange(e)} />

                    <label>Password:</label>
                        <input type="password" name="password" 
                            value={this.state.password} 
                            onChange={e => this.handleChange(e)} />

                        <input type="submit" value="Signup" />
                </form>
                    
                </div>
                <p>Already have account? 
          <Link to={"/login"}> Login</Link>
      </p>
            
            </div>
        )
    }
}

export default Signup 

