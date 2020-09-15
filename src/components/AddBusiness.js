import React, { Component } from 'react'
import Axios from 'axios';
import BHome from './BHome';

export class Addbusiness extends Component {
    constructor(props) {
        super(props);
        this.state = { businessName: '',
                       businessAddress: '',
                       businessDescription: '',
                       imageUrl:''
                        };
                        
    }

    // handleChange() and 
    //handleSubmit() will be added here
    handleFormSubmit = (event) => {
        Axios.post("http://localhost:5001/add-business",this.state, {withCredentials:true} )
        event.preventDefault();
        this.setState({ 
        businessName: '',
        businessAddress: '',
        businessDescription: '',
        imageUrl:'',
         })
    }
 

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
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

    render() {
        return (
            <div className="addbusiness">
                                <BHome/>
                <h1>Add business</h1>
                <p className="newbusiness">To add a new business to the app you need to have an account please <a href="/signup">signup</a></p>
                    <div>
                            <form onSubmit={this.handleFormSubmit}>
                                <label>Business</label>
                                <input type="text" name="businessName" placeholder="business name" value={this.state.businessName} onChange={this.handleChange}/>
                                <br/>
                               
                                <label>Address</label>
                                <input type="text" name="businessAddress" placeholder="add business address" value={this.state.businessAddress} onChange={this.handleChange}/>
                                <br/>
                                <label>Description </label>
                                <input type="text" name="businessDescription" placeholder="descrive your business" value={this.state.businessDescription} onChange={this.handleChange}/>
                                <br/>
                                <label> </label>
                                <input type="file" name="imageUrl" onChange={(event) => this.handleFileSubmit(event)}/>
                                <br/>
                                <input type="submit" name="submit"/>
                            </form>

                    </div>
            </div>
        )
    }
}

export default Addbusiness
