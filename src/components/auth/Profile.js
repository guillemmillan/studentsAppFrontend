import React, { Component } from 'react'
import BHome from '../BHome'

export class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <a href="/logout"> <button className="btn btn-danger">Logout</button></a>
            </div>
        )
    }
}

export default Profile
