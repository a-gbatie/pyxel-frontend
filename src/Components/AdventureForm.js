import React from 'react'



class AdventureForm extends React.Component {


    state = {
        title: '',
        photo: '',
        description: '',
        location: '',
        hashtags: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    //I believe we would have to create state and set it to the name of each attribute of the adventure 
    //we would also need a handleChange?
    //in our submit new we would then pass down the state. 

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    this.props.submitNew(e, this.state)}} >
                    
                    <label>Title:</label>
                    <input type="text" name="title" onChange={this.handleChange}/>

                    <label>URL:</label>
                    <input type="text" name="photo" onChange={this.handleChange}/>

                    <label>Description:</label>
                    <input type="text" name="description" onChange={this.handleChange}/>

                    <label>Location</label>
                    <input type="text" name="location" onChange={this.handleChange}/> 

                    <label>Hashtags</label>
                    <input type="text" name="hashtags" onChange={this.handleChange}/>

                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}

export default AdventureForm;


//(e, advData) => this.props.submitNew(e, advData)