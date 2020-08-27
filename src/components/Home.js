import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="menu">
                        <ul>
                            <li><a href="/signup">Singup</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                 <div className="bannnerH">
                        <h1>Find new job</h1>
                        <br/>
                        <div className="op">
                            <div className="searchJ">
                                {/*<img src="https://lh6.googleusercontent.com/yjiNzjczxDl_72U3pDT15uqI_55vwnsDsURY7ZO7lZqJ-yA-3H_D1HC7q8n2lNunPK12Y9hqLpihZw=w3430-h6867-rw"></img>
                               */} <p>Search job</p>
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
