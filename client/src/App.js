import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimesList from './components/TimesList'
import SubmitForm from './components/SubmitForm'
 
function App() {
 return (
    <div className="container">
      <SubmitForm />
      <TimesList />
    </div>
 );
}
 
export default App;