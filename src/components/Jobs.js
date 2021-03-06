import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BHome from './BHome'
export class Jobs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        this.getAllJobs()
    }

    getAllJobs() {
        axios.get("http://localhost:5001/jobs")
            .then(response => {
           this.setState({jobs: response.data}) 
            })
    }


    render() {
        const jobs = this.state.jobs.map(job =>(
            <div className="joblistcont" key={job._id}>
                <img src={job.image}/>
                <h3><Link to={"/jobs/" + job._id}>{job.name}</Link></h3>
                <p>{job.company.Name}</p>
            </div>
        ))

        return (
            <div className="jobsList">
                <div>
                    <BHome/> 
                    <h1>Jobs list</h1>
                    {jobs}
                </div>
              

            </div>
        )
    }
}

export default Jobs
