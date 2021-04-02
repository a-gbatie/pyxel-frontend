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


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        const { title, photo, location, description, hashtags} = this.state
        return (
            <div>
                {/* <form onSubmit={(e) => {
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
                </form>  */}
                {/* <Form.Input
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
          /> */}
            <Grid centered>
                <Grid.Column className="form-column">
                <Card fluid>
                <Card.Header className="create-header">Create New Post Here</Card.Header>
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


// const panes = [
//     { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
//     { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
//     { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
//   ]
  
//   const TabExampleBasicAll = () => <Tab panes={panes} renderActiveOnly={false} />

  


export default AdventureForm;

