import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Giphys from './components/Giphys';
import OneGif from './components/OneGif';
import Trendings from './components/Trendings';
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
   <Switch>
   <Route exact path="/" component={Home} />
    <Route exact path="/giphy" component={Giphys} />
    <Route exact
        path="/gif/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneGif id={id} />;
        }}
      />

<Route exact path="/trendings" component={Trendings} />
{/* <Route exact
        path="/trending/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneTrending id={id} />;
        }}
      /> */}
     </Switch>
    <Footer />
            </div>
</Router>
    );
  }
}

export default App;
