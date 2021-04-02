import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Card.css';

export default class AdventureCard extends Component {



    render() {
        const { title, photo, location, hashtags, description, likes } = this.props.adventure
        return (
            <div>

                <Card>
                    <Image src={photo} wrapped ui={false}
                        fluid
                        label={{ as: 'a', color: 'red', corner: 'right', icon: 'delete' }}
                        onClick={() => this.props.deleteAdv(this.props.adventure)}
                    />
                    <Card.Content>
                        <Card.Header className='title'>{title}</Card.Header>
                        <Card.Meta>
                            <span className='location'>{location}</span>
                        </Card.Meta>
                        <Card.Description>
                            {description}
                        </Card.Description>
                        <Card.Description style={{ color: 'blue' }}>
                            {hashtags}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='heart' onClick={() => this.props.likeAdventure(this.props.adventure)} />
                            {likes}
                        </a>
                    </Card.Content>
                </Card>
            </div>
            /* <ul>
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
            </ul>   */
        )
    }
}




