import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class Jobs extends Component {
/*
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
                this.setState({
                    jobs: response.data
                })
            })
    }
*/

    render() {
        const jobs = this.state.job.map(job =>(
            <div key={job._id}>
                <h3><Link to={"/jobs/" + job._id}>{job.Name}</Link></h3>
                <p>{job.Company}</p>
            </div>
        ))

        return (
            <div className="jobsList">

                <h1>Jobs list</h1>
                {jobs}

            </div>
        )
    }
}

export default Jobs
