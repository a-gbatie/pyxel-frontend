import React from 'react'



class AdventureForm extends React.Component {



    render() {
        return (
            <div>
                <form>
                    <label htmlFor="title">Title:</label>
                    <input type="text" />

                    <label htmlFor="photo">URL:</label>
                    <input type="text" />

                    <label htmlFor="description">Description:</label>
                    <input type="text" />

                    <label htmlFor="location">Location</label>
                    <input type="text" /> 

                    <label htmlFor="hashtages">Hashtags</label>
                    <input type="text" />

                    <input type="submit" value="Submit" onClick={(e, advData) => this.props.submitNew(e, advData)} >
                    </input>
                </form> 
            </div>
        )
    }
}

export default AdventureForm;


