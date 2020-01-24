import React, { Component } from 'react';
import './App.css';

const APP_ID='794f1117';
const APP_KEY='d20bc9a40cf80fab0a8b294437d68173';

// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"


class App extends Component {
  constructor() {
    super()

    this.state = {
      recipes = [];
    }
  }
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
