import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Giphys from './components/Giphys';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


class App extends Component {


  render() {

    return (
<Router>
<div className="App">
      <Header />
      <Route exact path="/" component={Home} />
    <Route exact path="/giphy" component={Giphys} />
    <Footer />
            </div>
</Router>
    );
  }
}

export default App;
