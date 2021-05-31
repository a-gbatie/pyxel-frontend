import React from 'react'
import { Form } from 'semantic-ui-react'
// import Card from 'react-bootstrap/Card'
import './Signup.css';


class Signup extends React.Component {


    state = {
        name: '',
        hometown: '',
        bio: '',
        age: ''
    }

    onSubmit = (e) => {
        this.props.createUser(e, this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, hometown, bio, age } = this.state
        return (
            <div className="signup-div">
                <h3>Signup Here</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group widths={3}>
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
                        <Form.Input
                            label='Age:'
                            type='number'
                            placeholder='Enter Age'
                            name='age'
                            value={age}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.TextArea
                        label='Bio:'
                        placeholder='Enter a Bio'
                        name='bio'
                        value={bio}
                        onChange={this.handleChange}
                    />
                    <Form.Button>Sign Up</Form.Button>
                </Form>
            </div>
        )
    }
}

export default Signup;

