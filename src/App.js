import React from 'react';
import './App.css';

// Components
import Header from './components/header/header.component'
import DessertsList from './components/dessertsList/dessertsList.component'

// functional component
const App = () =>  {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <DessertsList />
      </div>
    </div>
  );
}

export default App;
