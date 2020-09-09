import React, { Component } from 'react'

export class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state = { jobName: '',
                       jobcompanyName: '',
                       jobAddress: '',
                       jobDescription: '',
                       jobImage: ''
                        };
    }

    // handleChange() and handleSubmit() will be added here
    handleFormSubmit = (event) => {
        event.preventDefault();
        const jobName = this.state.jobName;
        const jobcompanyName = this.state.jobcompanyName;
        const jobAddress = this.state.jobAddress;
        const jobDescription = this.state.jobDescription;
        const jobImage = this.state.jobImage;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <div className="addJob">
                <h1>Add job</h1>
                <p className="newJob">To add a new job to the app you need to have an account please <a href="/signup">signup</a></p>
                    <div>
                            <form>
                                <label>Job</label>
                                <input type="text" name="jobName" placeholder="Job name" value={this.jobName} ></input>
                                <br/>
                                <label>Company</label>
                                <input type="text" name="jobcompanyName" placeholder="Company name" value={this.jobcompanyName} ></input>
                                <br/>
                                <label>Address</label>
                                <input type="text" name="jobAddress" placeholder="add job address" value={this.jobAddress} ></input>
                                <br/>
                                <label>Description </label>
                                <input type="text" name="jobDescription" placeholder="what jobs will develop" value={this.jobDescription} ></input>
                                <br/>
                                <label>Image</label>
                                <input type="file" name="jobImage" value={this.state.jobImage}></input>
                            </form>

                    </div>
            </div>
        )
    }
}

export default AddJob
