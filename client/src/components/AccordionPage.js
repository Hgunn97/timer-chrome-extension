import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import SubmitForm from './SubmitForm'
import TimesList from './TimesList'

class AccordionPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Accordion style={{width: "100%"}}>
            <Card>
                <Card.Header className="cardHeadItems">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Send data
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><SubmitForm time={this.props.time}/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header className="cardHeadItems">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Get data
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><TimesList /></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        )
    }
}

export default AccordionPage