import React, { Component } from 'react';
import './App.css';
import Giphys from './components/Giphys';
import Home from './components/Home';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {


  render() {

    return (
<Router>
<div className="App">
      <Header />
      <Route exact path="/" component={Home} />
    <Route exact path="/giphy" component={Giphys} />
            </div>
</Router>
    );
  }
}

export default App;
