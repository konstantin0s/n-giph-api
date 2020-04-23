import React, { Component } from 'react';
import axios from 'axios';
import Gif from './Gif';
import Loading from './Loading';
import './css/gifs.css';
require('dotenv');

const app_key = process.env.REACT_APP_API_KEY;
const cors_url = process.env.REACT_APP_CORS_URL;

 class Giphys extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          giphy: [],
     searchText: '',
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
        console.log(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.searchhGiphs(this.query.value);
        e.currentTarget.reset();
    }

    componentDidMount = () => {
        this.searchhGiphs();
    
    }
    


 searchhGiphs = (query) => {

    axios.get(`${cors_url}https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${app_key}&limit=5`)
        .then(res => {
            console.log(res.data.data);
          const giphy = res.data.data;
          this.setState({ giphy: giphy,
            isLoading: false
        });   
        })
        .catch(err => console.log(err));
}


    render() {

    console.log(this.state.giphy);

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