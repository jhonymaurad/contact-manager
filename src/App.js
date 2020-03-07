import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
