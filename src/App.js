import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import User from './container/User/User'



function App() {
  return (

    <BrowserRouter>
    
      <div className="App">
       <User/>
      </div>
     
    </BrowserRouter>

  );
}

export default App;