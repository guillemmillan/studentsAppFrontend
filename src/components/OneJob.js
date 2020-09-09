import React, { Component } from 'react'

export class OneJob extends Component {
    render() {
        return (
            <div>
                            
                            <h1>{this.job.Name}</h1>
                            <h3>{this.job.Company}</h3>
                            <p><b>{this.job.direction}</b></p>
                            <img src={this.job.imageUrl} alt=""/>
                            <p>{this.job.Description}</p>
            </div>
        )
    }
}

export default OneJob
