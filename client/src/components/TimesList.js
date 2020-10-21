import React from 'react'
import axios from 'axios'

class EachItem extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentDidMount(){
        let formatTime = this.props.item.time
        console.log(formatTime)

        let hours = Math.floor(formatTime / 3600)
        let mins = Math.floor(formatTime / 60)
        let secs = Math.floor(formatTime - mins * 60)

        this.setState({
            housr: hours,
            minutes: mins,
            seconds: secs
        })

    }

    render(){
        return(
            <div>
                <h3>Item</h3>
                <p>
                    Time spent:
                    {this.state.hours>0 ? ` ${this.state.hours} hours` : null} 
                    {this.state.minutes>0 ? ` ${this.state.minutes} minutes` : null}
                    {this.state.seconds>0 ? ` ${this.state.seconds} seconds` : null}
                </p>
                <p>Title: {this.props.item.title}</p>
                <p>Description: {this.props.item.description}</p>
            </div>
)}}

class TimesList extends React.Component{
    constructor(){
        super()
        this.state = {
            times: []
        }
    }
    componentDidMount(){
        axios.get('https://timer-chrome-extension.herokuapp.com/timer')
            .then(res => {
                this.setState({
                    times: res.data
                })
            })
            .catch(err => console.log(err))
    }

    timesList(){
        return this.state.times.map(currentItem => {
            return <EachItem item={currentItem} key={currentItem._id} />
        })
    }

    render(){
        return(
            <div>
                <h1>This is the times data</h1>
                {this.timesList()}
            </div>
        )
    }
}

export default TimesList