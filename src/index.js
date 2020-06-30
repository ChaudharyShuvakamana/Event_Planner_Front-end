import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/routes/Routes';



function App() {
  return (
    <div className="App">
     <Router />
 
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

