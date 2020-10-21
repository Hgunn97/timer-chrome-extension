import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Timer from './Timer'
import axios from 'axios'

class SubmitForm extends React.Component{
    constructor(){
        super();
        this.state = {
            time: '',
            title: '',
            description: ''
        }
        this.handleTimer = this.handleTimer.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
    }
    handleTimer = (timeVal) => {
        timeVal = timeVal.toString()
        timeVal = timeVal.slice(0, -3);
        timeVal = parseInt(timeVal)
        this.setState({time: timeVal})
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

        const data = {
            time: this.state.time,
            title: this.state.title,
            description: this.state.description
        }
        axios.post('https://timer-chrome-extension.herokuapp.com/timer/add', data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <Timer stopTime={this.handleTimer}/>
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
                <p>{this.state.time}</p>
            </div>
        )
    }
}

export default SubmitForm