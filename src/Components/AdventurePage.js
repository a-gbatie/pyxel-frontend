import React, { Component } from "react";
import AdventureCollection from "./AdventureCollection.js";
import Search from "./Search";
import AdventureForm from "./AdventureForm";

const ADV = "http://localhost:3000/adventures";

class AdventurePage extends Component {
  state = {
    adventurePost: [],
    searchedPost: [],
  };

  componentDidMount() {
    fetch(ADV)
      .then((res) => res.json())
      .then((advData) => {
        this.setState({ adventurePost: advData, searchedPost: advData });
      });
  }

  searchAdv = (e) => {
    let searchedData;
    e.target.value.length
      ? (searchedData = this.state.adventurePost.filter((adventure) =>
          adventure.title.includes(e.target.value)
        ))
      : (searchedData = this.state.adventurePost);
    this.setState({ searchedPost: searchedData });
  };

  //not working
  submitNew = (e, advData) => {
    e.preventDefault();
    const { title, photo, location, hashtags, description } = advData;
    const newAdv = {
      title,
      photo,
      location,
      hashtags,
      description,
    };
    e.target.reset();
    fetch("http://localhost:3000/adventures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newAdv),
    })
      .then((res) => res.json())
      .then((newAdv) => {
        this.setState({
          adventurePost: [newAdv, ...this.state.adventurePost],
          searchedPost: [newAdv, ...this.state.searchedPost],
        });
      });
  };

  likeAdventure = (adv) => {

    let newAdv = adv.likes +1  

    fetch(ADV + `/${adv.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify({ likes: newAdv }),
    })
      .then((res) => res.json())
      .then(newLike => {
        //   this.setState({
        //       adventurePost: 
        //   })
      })
      .then(console.log(this.state.adventurePost))
  };

//option, shift, f

  render() {
    return (
      <div>
        <AdventureForm submitNew={this.submitNew} />
        <Search searchAdv={this.searchAdv} />
        <AdventureCollection
          adventures={this.state.searchedPost}
          likeAdventure={this.likeAdventure}
        />
      </div>
    );
  }
}

export default AdventurePage;
