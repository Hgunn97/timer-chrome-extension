import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import SubmitForm from './SubmitForm'
import TimesList from './TimesList'
import './Accordion.css'

class AccordionPage extends React.Component{
    render(){
        return(
            <Accordion className="accordion">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Send data
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><SubmitForm time={this.props.time}/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Get data
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><TimesList /></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        )
    }
}

export default AccordionPage