import React, { Component } from 'react'

export default class AdventureCard extends Component {


    
    render() {
        const {title, photo, location, hashtags, description, likes} = this.props.adventure
        return (
            <div>
                <ul>
                    <div>
                        <h1>{title}</h1>
                        <h3>{location}</h3>
                        <img src={photo} alt="oops something went wrong" />
                        <p>{hashtags}</p>
                        <h4>{description}</h4>
                        <h4>{likes}</h4>
                        <button 
                            color="red"
                            content="Like"
                            icon="heart"
                            onClick={() => this.props.likeAdventure(this.props.adventure)}
                        >Like
                        </button>
                        <button onClick={() => this.props.deleteAdv(this.props.adventure)}>DELETE</button>
                    </div>
                </ul>  
            </div>
        )
    }
}


