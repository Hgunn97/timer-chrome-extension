import React from 'react'
import axios from 'axios'
import {ArrowRepeat} from 'react-bootstrap-icons'
import './TimesList.css'

class EachItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentDidMount(){
        let formatTime = this.props.item.time
        let hours = Math.floor(formatTime / 3600)
        let mins = Math.floor(formatTime / 60)
        let secs = Math.floor(formatTime - mins * 60)

        this.setState({
            hours: hours,
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
            times: [],
        }
    }
    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('https://timer-chrome-extension.herokuapp.com/timer')
            .then(res => {
                this.setState({
                    times: res.data
                })
                console.log(this.state.times)
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
            <div className="parentContainer">
                <div className="refreshIcon"><ArrowRepeat  onClick={() => this.getData()} size={25} /></div>
                {this.timesList()}
            </div>
        )
    }
}

export default TimesList