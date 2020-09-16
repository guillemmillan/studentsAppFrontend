import React, { Component } from 'react'
import Footer from './Footer'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <header>
                    <div className="menu">
                            <a href="/signup">Signup</a>
                            <a href="/login">Login</a>
                    </div>
                 <div className="bannnerH">
                     <div className="title">
                        <h1 className="mainTitle">studentsfp</h1>
                        </div>
                        <br/>
                        
                 </div>
                </header>
                <main>
                <div class="home">
                        <h2>New job oportunites</h2>
                        <div class="desc1">
                            <h4></h4>
                            <p></p>
                        </div>
                        <div class="desc1">
                            <h4></h4>
                            <p></p>
                        </div>
                <div className="op">
                            <div className="searchJ">
                               <p>Search job</p>
                               <button class="btn btn-dark"><a href="/jobs">Find job</a></button> 

                            </div>
                            <div className="offerJ">
                                <div class="rotate"><p >Offer Job</p>
                                <button class="btn btn-dark"><a href="/add-job">Add job</a></button> 
                                </div>
                            </div>
                        </div> 
                   
                    </div>   
                   {/* */}
                </main>
                <Footer/>               

            </div>
        )
    }
}

export default Home
