import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const ms = require('pretty-ms')

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time: 0,
            start: 0
        }
        this.stopTimer = this.stopTimer.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer(){
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1)
    }
    stopTimer(){
        clearInterval(this.timer)
        this.props.stopTime(this.state.time)
    }
    resetTimer(){
        clearInterval(this.timer)
        this.setState({time: 0})
    }

    render(){
        return(
            <div>
                <h3>Timer: {ms(this.state.time, {colonNotation: true, keepDecimalsOnWholeSeconds: true, compact: true})}</h3>
                <Button variant="success" onClick={this.startTimer}>start</Button>
                <Button variant="warning" onClick={this.stopTimer}>stop</Button>
                <Button variant="danger" onClick={this.resetTimer}>reset</Button>
            </div>
        )
    }
}

export default Timer