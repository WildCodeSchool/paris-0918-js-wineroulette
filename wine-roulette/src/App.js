import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BoutonPulse from './BoutonPulse'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoutonPulse />

        <footer className="App-footer">
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
