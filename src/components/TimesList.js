import React from 'react'
import axios from 'axios'

const EachItem = props => (
    <div>
        <h3>Item</h3>
        <p>Time spent: {props.item.time}</p>
        <p>Title: {props.item.title}</p>
        <p>Description: {props.item.description}</p>
    </div>
)

class TimesList extends React.Component{
    constructor(){
        super()
        this.state = {
            times: []
        }
    }
    componentDidMount(){
        axios.get('/timer')
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