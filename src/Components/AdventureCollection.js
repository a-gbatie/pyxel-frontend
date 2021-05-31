import React from 'react'
import AdventureCard from './AdventureCard'
import { Card } from 'semantic-ui-react'
import './Form.css';

class AdventureCollection extends React.Component {

    renderAdventures = () => {
        return this.props.adventures.map((adventure) => <AdventureCard 
          adventure={adventure}  
          key={adventure.id}
          likeAdventure={this.props.likeAdventure}
          deleteAdv={this.props.deleteAdv}
        />)
    }


    render() {
        return (
            <div className="collection-div">
                <Card.Group itemsPerRow={3}>
                    {this.renderAdventures()}
                </Card.Group>
            </div>
        )
    }
}

export default AdventureCollection;