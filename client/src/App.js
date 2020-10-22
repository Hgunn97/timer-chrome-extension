import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer'
import AccordionPage from './components/AccordionPage'

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      time: 0
    }
    this.timeCallback = this.timeCallback.bind(this)
  }
  timeCallback(timeData){
    this.setState({
      time: timeData
    })
  }
  render(){
    return (
      <div className="container chromeBkg">
        <Timer stopTime={this.timeCallback}/>
        <AccordionPage time={this.state.time}/>
      </div>
    );
  }
}
 
export default App;