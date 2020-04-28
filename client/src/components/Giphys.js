import React, { Component } from 'react';
import axios from 'axios';
import Gif from './Gif';
import Loading from './Loading';
import './css/gifs.css';
require('dotenv');

 class Giphys extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          giphy: [],
          searchText: [],
          term: '',
          isLoading: true
       }
     
      }


      

      searchingFor = term => {
        return (x) =>  {
          return x.title.includes(term) || !term;
        }
      }

      onSearchChange = e => {
        this.searchhGiphs(this.query.value);
        this.setState({
            searchText: e.target.value,
            term: e.target.value
        });
      //   if (e.target.value.length === 0) {
      //     this.setState(() => ({
      //       searchText: [],
      //       term: []
      //     }))
      // } 
        console.log(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.searchhGiphs(this.query.value);
        e.currentTarget.reset();
        this.setState({ searchText: [], term: '' });
    }

    componentDidMount = () => {
        this.searchhGiphs();
    
    }
    


 searchhGiphs = (query) => {

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}&limit=5`)
        .then(res => {
            // console.log(res.data.data);
          const giphy = res.data.data;
          this.setState({ giphy: giphy,
            isLoading: false
        });   
        })
        .catch(err => console.log(err));
}

selectedText = (value) => {
  this.setState(() => ({
      searchText: [],
      term: value
  }))
}


renderSuggestions = () => {
let {giphy, searchText, term } = this.state;
if (searchText.length === 0) {
    return null;
}
return (
    <ul>
     { giphy.filter(this.searchingFor(term)).map((gif) => (
          <li key={gif.id} onClick={() => this.selectedText(gif.title)}>
              {gif.title}
          </li>
    
      ) )}
    </ul>
)
}


    render() {

    // console.log(this.state.giphy);

        return (
            <div className="container">

<div className="contain-form">
   <form className="search-form" onSubmit={this.handleSubmit}>
 
            <input
              onChange={this.onSearchChange}
              type="text"
              ref={input => (this.query = input)}
              placeholder="Enter Gif name"
              aria-label="Search"
            />
              {/* {this.renderSuggestions()} */}
          <div className="search"></div>
        </form>

   </div>

            <div className="s-gifs">
            {

                    
(this.state.isLoading) ? <Loading /> : 


this.state.giphy.filter(this.searchingFor(this.state.searchText)).map((gif) => (

        <Gif key={gif.id} gif={gif} />
    ))   } 

            </div>
     
            </div>
        )
    }
}


export default Giphys;