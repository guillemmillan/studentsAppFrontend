import React, { Component } from 'react'
import Axios from 'axios'

export class OneJob extends Component {
    constructor(props){
        super(props)
        this.state={
            job:{}
        }
        this.getSingleJob = this.getSingleJob.bind(this)
    }
    componentDidMount(){
       this.getSingleJob()
    }
    getSingleJob(){
        Axios.get("http://localhost:5001/jobs/" + this.props.match.params._id)
        .then(response => {
            console.log(response)
            this.setState({
                job: response.data
            })
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="oneJob"> 
                <div class="imageJob"><img src={this.state.job.image} alt="job image"/></div>
                <div class="descriptionJob"> 
                   <h1>Job offer for: {this.state.job.name}</h1>  
                   <p>Job Addres: {this.state.job.address}</p>     
                   <p>Company: {this.state.Name}</p> 
                   <p>Description: {this.state.job.description}</p> 
                   </div>        
            </div>
        )
    }
}

export default OneJob
