import React, { Component } from 'react'
import BHome from './BHome';
import Axios from 'axios';

export class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state = { jobName: '',
                       jobCompanyName: '',
                       jobAddress: '',
                       jobDescription: '',
                        };
    }

    // handleChange() and handleSubmit() will be added here
    handleFormSubmit = async (event) => {
        event.preventDefault();
        await  Axios.post("http://localhost:5001/add-job", this.state, {withCredentials:true})
        this.setState({ 
            jobName: '',
            jobCompanyName: '',
            jobAddress: '',
            jobDescription: '',
            imageUrl:''
        })
    }
    handleFileSubmit = (event) =>{
        console.log("The file to be uploaded is: ", event.target.files[0]);
        const uploadData = new FormData()
        uploadData.append("imageUrl", event.target.files[0])
        Axios.post("http://localhost:5001/upload", uploadData)
        .then(response =>{
            this.setState({ imageUrl: response.secure_url });
        })
        .catch(err => {
          console.log("Error while uploading the file: ", err);
        });
  }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <div className="addJob">
                <BHome/>
                <h1>Add job</h1>
                <p className="newJob">To add a new job to the app you need to have an account please <a href="/signup">signup</a></p>
                    <div>
                            <form  onSubmit={this.handleFormSubmit}>
                                <label>Job</label>
                                <input type="text" name="jobName" placeholder="Job name" value={this.jobName} onChange={this.handleChange}/>
                                <br/>
                                <label>Company</label>
                                <input type="text" name="jobCompanyName" placeholder="Company name" value={this.jobCompanyName} onChange={this.handleChange}/>
                                <br/>
                                <label>Address</label>
                                <input type="text" name="jobAddress" placeholder="add job address" value={this.jobAddress} onChange={this.handleChange}/>
                                <br/>
                                <label>Description </label>
                                <input type="text" name="jobDescription" placeholder="what jobs will develop" value={this.jobDescription} onChange={this.handleChange}/>
                                <br/>
                                <input type="submit" name="submit"/>
                            </form>

                    </div>
            </div>
        )
    }
}

export default AddJob
