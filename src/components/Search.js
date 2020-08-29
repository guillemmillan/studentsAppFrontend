import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className="search">
                <h1>Search</h1>
                <input type="text" name="search" placeholder="Find your job or company to work"></input>
                <div className="search-result">
                    <ul>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search
