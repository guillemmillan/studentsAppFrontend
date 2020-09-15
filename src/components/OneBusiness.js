import React, { Component } from 'react'
import Axios from 'axios'
import BHome from './BHome'

export class OneBusiness extends Component {
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            job:{}
        }
        this.getSingleBusiness = this.getSingleBusiness.bind(this)
    }
    getSingleBusiness(){
        Axios.get("http://localhost:5001" + this.state.id)
        .then(response => {
            this.setState({
                job: response.data
            })
        })
    }
    render() {
        return (
            <div>
                                    <BHome/> 
                
                                <h1> One business</h1>
            </div>
        )
    }
}

export default OneBusiness

