import React from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

class SubmitForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        let timeVal = this.props.time
        timeVal = timeVal.toString()
        timeVal = timeVal.slice(0, -3);
        timeVal = parseInt(timeVal)

        const data = {
            time: timeVal,
            title: this.state.title,
            description: this.state.description
        }
        console.log(data)
        axios.post('https://timer-chrome-extension.herokuapp.com/timer/add', data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <p>{this.props.time===0 ? <i>Please stop the timer before submitting</i> : null}</p>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter activity title" onChange={this.onChangeTitle} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={2} onChange={this.onChangeDescription} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SubmitForm