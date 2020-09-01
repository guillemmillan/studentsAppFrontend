import React, { Component } from 'react'
import BHome from '../BHome'
import AuthService from '../../auth/auth-service';

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', email: '', password: '' };
        this.service = new AuthService();
      }
      handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;
       
        this.service.signup(username, email, password)
        .then( response => {
            this.setState({
                username:   "",
                email:  "", 
                password:   "",
            });
            // this.props.getUser(response)
        })
        .catch( error => console.log(error) )
      }
       
      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
    render() {
        return (
            <div>
               <BHome/>
                <h1>Singup</h1>
                <div className="signupForm">
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username </label>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
                    <br/>
                 {/*  <label>Address</label>
                    <input type="text" name="address" placeholder="Company Address"></input>
                    <br/> */} 
                    <label>Email </label>
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
                    <br/>
                    <label>Passowrd </label>
                    <input type="password" name="password"  placeholder="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
                    <label><input type="submit" value="Signup" />
</label>
                </form>
                </div>
            
            </div>
        )
    }
}

export default Signup
