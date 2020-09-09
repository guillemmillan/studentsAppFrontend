import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="sticky">
                <footer className="mainFooter">
                    <div>
                        <a href="/jobs">Jobs</a>
                    </div>
                    <div>
                        <a href="/business">Business</a>
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
