import React, { Component } from "react";
import AdventureCollection from '../Components/AdventureCollection.js'
import Search from '../Components/Search'

const ADV = "http://localhost:3000/adventures"



class AdventurePage extends Component {

    state = {
        adventurePost: [],
        searchedPost: [] 
    }

    componentDidMount() {
        fetch(ADV)
        .then(res => res.json())
        .then(advData => {
            this.setState({ adventurePost: advData, searchedPost: advData })
        })
    }

    searchAdv = (e) => {
        let searchedData
        e.target.value.length? 
        searchedData = this.state.adventurePost.filter(adventure => adventure.title.includes(e.target.value)) :
        searchedData = this.state.adventurePost
        this.setState({ searchedPost: searchedData })
    }
    
    render() {
        return (
            <div>
                <Search searchAdv={this.searchAdv}/>
                <AdventureCollection adventures={this.state.searchedPost} />        
            </div>
        )
    }
}

export default AdventurePage; 



