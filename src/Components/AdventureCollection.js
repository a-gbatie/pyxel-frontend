import React from 'react'
import AdventureCard from './AdventureCard'

class AdventureCollection extends React.Component {

    renderAdventures = () => {
        return this.props.adventures.map(adventure => <AdventureCard 
          adventure={adventure}  
          key={adventure.id}
          likeAdventure={this.props.likeAdventure}
        />)
    }


    render() {
        return (
            <div>
                {this.renderAdventures()}
            </div>
        )
    }
}

export default AdventureCollection;