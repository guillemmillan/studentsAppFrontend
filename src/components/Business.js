import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BHome from './BHome'

export class Business extends Component {
    constructor(props) {
        super(props)
        this.state = {
            business: []
        }
    }

    componentDidMount() {
        this.getAllbusiness()
    }

    getAllbusiness() {
        axios.get("http://localhost:5001/business")
            .then(response => {
           this.setState({business: response.data}) 
            })
    }


    render() {
        const business = this.state.business.map(business =>(
            <div className="joblistcont" key={business._id}>
                <img src={business.image}/>
                <h3><Link to={"/business/" + business._id}>{business.Name}</Link></h3>
                <p>{business.Name}</p>
            </div>
        ))

        return (
            <div className="jobList">
                <div>
                    <BHome/> 
                    <h1>Business list</h1>
                    {business}
                </div>
              

            </div>
        )
    }
}


export default Business
