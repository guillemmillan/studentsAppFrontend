import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="sticky">
                <footer className="mainFooter">
                    <div>
                        <a href="/jobs">Find Jobs</a>
                    </div>
                    <div>
                        <a href="/add-business">Add Business</a>
                    </div>
                    <div>
                        <a href="/search">Search</a>
                    </div>
                    <div>
                        <a href="/profile">Profile</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
