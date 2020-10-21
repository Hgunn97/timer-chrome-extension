import React from 'react'
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
        console.log(this.state.time)
    }
    resetTimer(){
        clearInterval(this.timer)
        this.setState({time: 0})
    }

    render(){
        return(
            <div>
                <p>This is where the timer will be</p>
                <h3>Timer: {ms(this.state.time, {colonNotation: true, keepDecimalsOnWholeSeconds: true})}</h3>
                <button onClick={this.startTimer}>start</button>
                <button onClick={this.stopTimer}>stop</button>
                <button onClick={this.resetTimer}>reset</button>
            </div>
        )
    }
}

export default Timer