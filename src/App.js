import React from 'react';
import Encabezado from './encabezado';
import Acertijo from './acertijo';
import "./App.css"


function App() {
return(
    <div className='App'>
        <Encabezado/>
        <Acertijo limite='10'/>
    </div>
);
  
}

export default App;
