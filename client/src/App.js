import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer'
import AccordionPage from './components/AccordionPage'

import './App.css';
 
function App() {
 return (
    <div className="container chromeBkg">
      <Timer />
      <AccordionPage />
    </div>
 );
}
 
export default App;