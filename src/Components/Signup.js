import React from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import './Signup.css';


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
        const { name, hometown, bio, age} = this.state
        return (
            <div>
                <Grid >
                <Grid.Column className="sign-up-column">
                <Card fluid>
                <Card.Header className="create-signup-header">Create New User Here</Card.Header>
                <br/>
                    <Form unstackable onSubmit={this.onSubmit}>
                        <Form.Group widths={2}>
                        <Form.Input
                            label='Name:'
                            placeholder='Enter a Name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label='Hometown:'
                            placeholder='Enter a Hometown'
                            name='hometown'
                            value={hometown}
                            onChange={this.handleChange}
                        />
                        </Form.Group>

                        <Form.Group widths={2}>
                        <Form.Input
                            label='Bio:'
                            placeholder='Enter a Bio'
                            name='bio'
                            value={bio}
                            onChange={this.handleChange}
                            />
                            <Form.Input
                                label='Age:'
                                type='number'
                                placeholder='Enter Age'
                                name='age'
                                value={age}
                                onChange={this.handleChange}
                            />
                            </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Card>
                </Grid.Column>
            </Grid>
                {/* <form onSubmit={(e) => {
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
                </form>  */}
            </div>
        )
    }
}

export default Signup;

