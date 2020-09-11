

import React, { Component } from 'react'
import BHome from '../BHome'
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service'
import Form from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';

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
            <div className="signup">
                <div className="header">
                    <BHome/>
                    <h1>Singup</h1>
                    </div>
                    <h3>Porque registrarme?</h3>
                <div className="mainSignup"> 
                <div className="infosign">
                <ul>
                    <li>Promociona tus puesto de trabajo</li>
                    <li>Alcanza unicamente a alumnos de Formacion profesional</li>
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="interview"/>
                </ul>
                </div>  
                <div className="signupForm">
                <form onSubmit={this.handleFormSubmit}>
                   <label>Email:</label>
                        <input type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={e => this.handleChange(e)} />
                            <br/>
                    <label>Username:</label>
                        <input type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={e => this.handleChange(e)} />
                            <br/>

                    <label>Password:</label>
                        <input type="password" name="password" 
                            value={this.state.password} 
                            onChange={e => this.handleChange(e)} />
                        <br/>
                        <input type="submit" value="Signup" />
                        <br/>
                        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
      </p>
                </form>
                </div>
                </div> 
   
            
            </div>
        )
    }
}

export default Signup 

