import React from 'react'



class Signup extends React.Component {


    state = {
        name: '',
        hometown: '',
        bio: '', 
        age: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    this.props.createUser(e, this.state)}}>
                    
                    <label>UserName:</label>
                    <input type="text" name="name" onChange={this.handleChange}/>

                    <label>Hometown:</label>
                    <input type="text" name="hometown" onChange={this.handleChange}/>

                    <label>Bio:</label>
                    <input type="text" name="bio" onChange={this.handleChange}/>

                    <label>Age:</label>
                    <input type="number" name="age" onChange={this.handleChange}/> 

                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}

export default Signup;

