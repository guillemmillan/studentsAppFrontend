import React, { Component } from 'react'

export class Addbusiness extends Component {
    constructor(props) {
        super(props);
        this.state = { businessName: '',
                       businesscompanyName: '',
                       businessAddress: '',
                       businessDescription: '',
                       businessImage: ''
                        };
                        
    }

    // handleChange() and handleSubmit() will be added here
    handleFormSubmit = (event) => {
        event.preventDefault();
        const businessName = this.state.businessName;
        const businesscompanyName = this.state.businesscompanyName; 
        const businessAddress = this.state.businessAddress;
        const businessDescription = this.state.businessDescription;
        const businessImage = this.state.businessImage;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <div className="addbusiness">
                <h1>Add business</h1>
                <p className="newbusiness">To add a new business to the app you need to have an account please <a href="/signup">signup</a></p>
                    <div>
                            <form>
                                <label>business</label>
                                <input type="text" name="businessName" placeholder="business name" value={this.state.businessName} ></input>
                                <br/>
                                <label>Company</label>
                                <input type="text" name="businesscompanyName" placeholder="Company name" value={this.state.businesscompanyName} ></input>
                                <br/>
                                <label>Address</label>
                                <input type="text" name="businessAddress" placeholder="add business address" value={this.state.businessAddress} ></input>
                                <br/>
                                <label>Description </label>
                                <input type="text" name="businessDescription" placeholder="what businesss will develop" value={this.state.businessDescription} ></input>
                                <br/>
                                <label>Image</label>
                                <input type="file" name="businessImage" value={this.state.businessImage}></input>
                            </form>

                    </div>
            </div>
        )
    }
}

export default Addbusiness
