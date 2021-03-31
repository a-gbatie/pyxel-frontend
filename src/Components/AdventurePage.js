import React, { Component } from "react";
import AdventureCollection from '../Components/AdventureCollection.js'

const ADV = "http://localhost:3000/adventures"



class AdventurePage extends Component {

    state = {
        adventurePost: [],
        searchedPost: "" 
    }

    componentDidMount() {
        fetch(ADV)
        .then(res => res.json())
        .then(advData => {
            this.setState({ adventurePost: advData, searchedPost: advData })
        })
    }
    
    
    render() {
        return (
            <div>
                <AdventureCollection adventures={this.state.adventurePost} />        
            </div>
        )
    }
}

export default AdventurePage; 