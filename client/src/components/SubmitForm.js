import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Timer from './Timer'

class SubmitForm extends React.Component{
    
    render(){
        return(
            <div>
                <Timer time=""/>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter activity title" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={2} />
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