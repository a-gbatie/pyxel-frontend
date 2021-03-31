import React, { Component } from "react";
import AdventureCollection from '../Components/AdventureCollection.js'
import Search from '../Components/Search'
import AdventureForm from '../Components/AdventureForm'


const ADV = "http://localhost:3000/adventures"



class AdventurePage extends Component {

    state = {
        adventurePost: [],
        searchedPost: [],
        likedAdventure: {} 
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

    submitNew = (e, advData) => {
        e.preventDefault()
        const { title, photo, location, hashtags, description } = advData
        const newAdv = {
            title,
            photo,
            location,
            hashtags,
            description
        }
        e.target.reset()
        fetch('http://localhost:3000/adventures', {
          method: 'POST', 
          headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(newAdv)
        })
        .then(res => res.json())
        .then(newAdv => {
          this.setState({ adventurePost: [newAdv, ...this.state.adventurePost], 
          searchedPost: [newAdv, ...this.state.searchedPost ]
        })})
      }
    
    render() {
        return (
            <div>
                <AdventureForm submitNew={this.submitNew}/> 
                <Search searchAdv={this.searchAdv}/>
                <AdventureCollection adventures={this.state.searchedPost} likeAdventure={this.likeAdventure}/>        
            </div>
        )
    }
}

export default AdventurePage; 





