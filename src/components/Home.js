import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="menu">
                        <ul>
                            <li><a>Singup</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                 <div className="bannnerH">
                        <h1>Find new job</h1>
                        <br/>
                        <div className="op">
                            <div className="searchJ">
                                <p>Search job</p>
                            </div>
                            <div className="offerJ">
                                <p>Offer Job</p>
                            </div>
                        </div>
                      
                 </div>
                </header>
                <main>

                </main>

            </div>
        )
    }
}

export default Home
