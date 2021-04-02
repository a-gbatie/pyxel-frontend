import React from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import './Form.css';





class AdventureForm extends React.Component {


    state = {
        title: '',
        photo: '',
        description: '',
        location: '',
        hashtags: ''
    }

    onSubmit = (e) => {
        this.props.submitNew(e, this.state)
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
        const { title, photo, location, description, hashtags} = this.state
        return (
            <div>
            <Grid >
                <Grid.Column className="form-column">
                <Card fluid>
                <Card.Header className="create-header">Create New Post Here</Card.Header>
                <br/>
                    <Form unstackable onSubmit={this.onSubmit}>
                        <Form.Group widths={2}>
                        <Form.Input
                            label='Activity:'
                            placeholder='Enter an Activity'
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label='URL:'
                            placeholder='Enter a Photo Url'
                            name='photo'
                            value={photo}
                            onChange={this.handleChange}
                        />
                        </Form.Group>

                        <Form.Group widths={2}>
                        <Form.Input
                            label='Location:'
                            placeholder='Enter a Location'
                            name='location'
                            value={location}
                            onChange={this.handleChange}
                            />
                            <Form.Input
                                label='Hashtags:'
                                placeholder='Enter Hashtags'
                                name='hashtags'
                                value={hashtags}
                                onChange={this.handleChange}
                            />
                            </Form.Group>
                        <Form.TextArea
                            label='Description:'
                            placeholder='Enter a Description'
                            name='description'
                            value={description}
                            onChange={this.handleChange}
                        />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Card>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}


// // const panes = [
// //     { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
// //     { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
// //     { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
// //   ]
  
// //   const TabExampleBasicAll = () => <Tab panes={panes} renderActiveOnly={false} />

  


export default AdventureForm;

